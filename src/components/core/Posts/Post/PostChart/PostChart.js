import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array'
import Svg, { G,  Path } from 'react-native-svg';
import { View, Dimensions } from 'react-native';
import React, { Component } from 'react';
import _ from 'lodash';
import ChartUtils from './chartUtils';
import { currentTime } from '../../../../../helpers/currentTime';
import Grid from './Grid';
import YAxis from './YAxis';
import moment from 'moment';
import { styles } from './styles';

const d3 = { scale, shape };
const width = Dimensions.get('window').width - 20;
const height = 250;

class PostChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linePath: '',
            bars: [],
            x: null,
            y: null,
            expired: currentTime.getTime() > (moment(this.props.forecast).valueOf()),
            timeScale: ChartUtils.getTimeScale(this.props.createdAt, this.props.forecast)};
    };

    // shouldComponentUpdate (nextProps, nextState) {
    //    // #Todo
    // }

    componentDidMount () {
        this.computeNextState(this.props);
    }

    componentWillReceiveProps (nextProps) {
        this.computeNextState(nextProps);
    }

    xAccessor = d => new Date(d.time);
    yAccessor = d => this.props.recommend === 'Buy' ? d.closeAsk : d.closeBid;

    createChart = ({data, recommend, forecast}) => {

        const mappedData = data.map((item) => ({
            x: this.xAccessor(item),
            y: this.yAccessor(item),
        }));

        const yValues = mappedData.map(item => item.y);

        const yExtent = d3Array.extent([ ...yValues]);
        const xExtent = d3Array.extent([moment(data[0].time).valueOf(), moment(forecast).valueOf()]);

        const y = d3.scale.scaleLinear()
            .domain(yExtent)
            .range([height, 0]);

        const x = d3.scale.scaleTime()
            .domain(xExtent)
            .range([0, width]);

        const linePath = d3.shape.area()
            .x(d => x(d.x))
            .y0(y(0))
            .y1(d => y(d.y))
            .curve(shape.curveLinear)
            (mappedData);

        this.setState({bars: data, linePath, x, y});
    };

    createLineChart = ({data, quote, recommend, createdAt, forecast}) => {
        const timeNow = currentTime.getTime();
        const strict = ChartUtils.getStrictTimescale(createdAt, forecast);
        const index = data.findIndex(d => d.time > (moment(createdAt).valueOf() - strict));
        let bars = [];
        if (index === -1) {
            bars = data.slice(data.length - 5, data.length);
        } else {
            bars = data.slice(index, data.length);
        }
        const lastBar = {
            closeAsk: Math.round(quote.askPrice * 1000000),
            closeBid: Math.round(quote.bidPrice * 1000000),
            highAsk: Math.round(quote.askPrice * 1000000),
            highBid: Math.round(quote.bidPrice * 1000000),
            lowAsk: Math.round(quote.askPrice * 1000000),
            lowBid: Math.round(quote.bidPrice * 1000000),
            openAsk: bars[bars.length - 2].closeAsk,
            openBid: bars[bars.length - 2].closeBid,
            time: timeNow
        };
        if (timeNow > bars[bars.length - 1].time) {
            bars.push(lastBar);
        } else {
            bars[bars.length - 1] = lastBar;
        }

        this.createChart({data: bars, recommend, forecast})
    };

    createLineExpiredChart = ({data, recommend, createdAt, forecast}) => {
        const strict = ChartUtils.getStrictTimescale(createdAt, forecast);
        const index = data.findIndex(d => d.time > (moment(createdAt).valueOf() - strict));
        let bars = [];
        if (index === -1) {
            bars = data.slice(data.length - 5, data.length);
        } else {
            bars = data.slice(index, data.length);
        }
        this.createChart({data: bars, recommend, forecast})
    };

    computeNextState (nextProps) {
        if (!this.state.expired) {
            const isLoading = nextProps.charts
                && nextProps.charts[this.state.timeScale]
                && nextProps.charts[this.state.timeScale].isLoading;
            if (nextProps.connect && !isLoading) {
                if (nextProps.quote
                    && nextProps.charts
                    && nextProps.charts[this.state.timeScale]
                    && nextProps.charts[this.state.timeScale].bars.length > 0) {
                    const timeNow = currentTime.getTime();
                    let timeOfBeforeLastElementFromArray = _.last(nextProps.charts[this.state.timeScale].bars).time;
                    const coefficient = 1000 * 60 * ChartUtils.hours[this.state.timeScale];
                    if (((timeNow - timeOfBeforeLastElementFromArray) - coefficient) > coefficient) {
                        while ((timeNow - timeOfBeforeLastElementFromArray) > coefficient) {
                            timeOfBeforeLastElementFromArray += coefficient;
                        }
                    }
                    const timeDiff = (timeNow - timeOfBeforeLastElementFromArray) / 1000 / 60;
                    const maxDiff = ChartUtils.hours[this.state.timeScale];
                    if (nextProps.connect && (timeDiff > maxDiff)) {
                        this.props.getChartData(this.state.timeScale);
                    } else {
                        this.createLineChart({
                            data: nextProps.charts[this.state.timeScale].bars,
                            recommend: nextProps.recommend,
                            quote: nextProps.quote,
                            createdAt: nextProps.createdAt,
                            forecast: nextProps.forecast,
                        });
                    }
                } else {
                    this.props.getChartData(this.state.timeScale);
                }
            }
        } else {
            this.createLineExpiredChart({
                data: nextProps.expiredBars,
                recommend: nextProps.recommend,
                createdAt: nextProps.createdAt,
                forecast: nextProps.forecast,
            });
        }
    }

    render () {
        const { linePath, x, y, bars } = this.state;
        return(
            <View style={styles.container}>
                <Svg width={width} height={height}>
                    <G x={0} y={0}>
                        <Path d={linePath}
                            stroke='#3a79ee'
                            fill='#94A1EE'/>
                    </G>
                    { x && y
                        ? <Grid ticksY={y.ticks(5)} ticksX={x.ticks(5)} x={x} y={y}/>
                        : null }
                    {bars.length > 0
                        ? <YAxis data={bars}
                                 numberOfTicks={5}
                                 width={width}
                                 height={height}
                                 yAccessor={this.yAccessor}
                                 contentInset={{ top: 20, bottom: 20 }}
                                 svg={{
                                     fill: 'grey',
                                     fontSize: 10
                                 }}
                                 formatLabel={ value => `${value / 1000000}` }/>
                        : null}
                </Svg>
            </View>
        )
    }
}

export default PostChart;