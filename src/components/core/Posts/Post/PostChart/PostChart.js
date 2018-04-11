import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array'
import Svg, { G,  Path } from 'react-native-svg';
import { View, Dimensions } from 'react-native';
import React, { Component } from 'react';
import ChartUtils from './chartUtils';
import { currentTime } from '../../../../../helpers/currentTime';
import Grid from './Grid';
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
            grid: null,
            scaleX: null,
            scaleY: null,
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
    yAccessor = (d, recommend) => recommend === 'Buy' ? d.closeAsk : d.closeBid;

    createScaleX = (start, end, width) => {
        return d3.scale.scaleTime()
            .domain([moment(start).valueOf(), moment(end).valueOf()])
            .range([0, width]);
    };
    createScaleY = (minY, maxY, height) => {
        return d3.scale.scaleLinear()
            .domain([minY, maxY])
            .range([height, 0]);
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
        const scaleX = this.createScaleX(bars[0].time, forecast, width);
        const extentY = d3Array.extent(bars.map(x => this.yAccessor(x, recommend)));
        const scaleY = this.createScaleY(extentY[0], extentY[1], height);
        const lineShape = d3.shape.area()
            .x(d => scaleX(this.xAccessor(d)))
            .y0(height)
            .y1(d => scaleY(this.yAccessor(d, recommend)));

        this.setState({
            linePath: lineShape(bars),
            scaleX,
            scaleY
        });
    };

    createLineExpiredChart = ({data, recommend, createdAt, forecast, width, height}) => {
        const scaleX = this.createScaleX(createdAt, forecast, width);
        const extentY = d3Array.extent(data.map(x => this.yAccessor(x, recommend)));
        const scaleY = this.createScaleY(extentY[0], extentY[1], height);

        const lineShape = d3.shape.area()
            .x(d => scaleX(this.xAccessor(d)))
            .y0(height)
            .y1(d => scaleY(this.yAccessor(d, recommend)));

        this.setState({
            linePath: lineShape(data),
            scaleX,
            scaleY
        });
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
                    this.createLineChart({
                        data: nextProps.charts[this.state.timeScale].bars,
                        recommend: nextProps.recommend,
                        quote: nextProps.quote,
                        createdAt: nextProps.createdAt,
                        forecast: nextProps.forecast,
                    });
                } else {
                    this.props.getChartData(this.state.timeScale);
                }

            }
        } else {
            // this.createLineExpiredChart({
            //     data: nextProps.expiredBars,
            //     recommend: nextProps.recommend,
            //     createdAt: nextProps.createdAt,
            //     forecast: nextProps.forecast,
            // });
        }
    }

    render () {
        const { linePath, scaleX, scaleY } = this.state;
        return(
            <View style={styles.container}>
                <Svg width={width} height={height}>
                    <G x={0} y={0}>
                        <Path d={linePath}
                            stroke='#3a79ee'
                            fill='#94A1EE'/>
                    </G>
                    { scaleX && scaleY
                        ? <Grid ticksY={scaleY.ticks(7)} ticksX={scaleX.ticks(5)} x={scaleX} y={scaleY}/>
                        : null }
                </Svg>
                {/*<View key={'ticksX'}>*/}
                    {/*{ticks.map((tick, index) => {*/}
                        {/*return (*/}
                            {/*<CustomText key={index}>*/}
                                {/*{(new Date(tick.d.time * 1000)).toString()}*/}
                            {/*</CustomText>*/}
                        {/*);*/}
                    {/*})}*/}
                {/*</View>*/}
                {/*<View key={'ticksY'} style={{position: 'absolute', top: 0, right: 80}}>*/}
                    {/*{ticks.map((tick, index) => {*/}
                        {/*return (*/}
                            {/*tick.x > 0*/}
                                {/*? <CustomText key={index} style={{top: tick.y, position: 'absolute'}}>*/}
                                {/*{ChartUtils.yAccessor(tick.d, this.props.recommend)}*/}
                            {/*</CustomText>*/}
                                {/*: null*/}
                        {/*);*/}
                    {/*})}*/}
                {/*</View>*/}
            </View>
        )
    }
}

export default PostChart;