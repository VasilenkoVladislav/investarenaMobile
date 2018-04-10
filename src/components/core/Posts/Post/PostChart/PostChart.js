import ChartUtils from './chartUtils';
import { View, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { CustomText } from '../../../../core/CustomText';
import moment from 'moment';
import { currentTime } from '../../../../../helpers/currentTime';
import { styles } from './styles';
import Grid from './Grid';
import Svg, { G, Line, Path, Polyline } from 'react-native-svg';


const width = Dimensions.get('window').width - 20;
const height = 250;

class PostChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linePath: '',
            ticks: [],
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
                    const lineChart = ChartUtils.createLineChart({
                        data: nextProps.charts[this.state.timeScale].bars,
                        timeScale: this.state.timeScale,
                        recommend: nextProps.recommend,
                        quote: nextProps.quote,
                        createdAt: nextProps.createdAt,
                        forecast: nextProps.forecast,
                        width,
                        height,
                    });
                    this.setState({linePath: lineChart.path, ticks: lineChart.ticks});
                } else {
                    this.props.getChartData(this.state.timeScale);
                }

            }
        } else {
            const lineChart = ChartUtils.createLineExpiredChart({
                data: nextProps.expiredBars,
                recommend: nextProps.recommend,
                timeScale: this.state.timeScale,
                createdAt: nextProps.createdAt,
                forecast: nextProps.forecast,
                width,
                height,
            });
            this.setState({linePath: lineChart.path, ticks: lineChart.ticks});
        }
    }

    render () {
        const { linePath, ticks } = this.state;
        return(
            <View style={styles.container}>
                <Svg width={width} height={height}>
                    <G x={0} y={0}>
                        <Path d={linePath}
                            stroke='#3a79ee'
                            fill='#94A1EE'/>
                    </G>
                    {/*<Grid/>*/}
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