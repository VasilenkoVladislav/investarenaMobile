import React, { Component } from 'react'
import { G, Line, Text } from 'react-native-svg'
import * as d3scale from 'd3-scale';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Axis extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        ticks: PropTypes.number.isRequired,
        minVal: PropTypes.number.isRequired,
        maxVal: PropTypes.number.isRequired
    };

    getTickPoints () {
        const { width, ticks } = this.props;
        let res = [];
        let ticksEvery = Math.floor((width - 45) / (ticks));
        for (let cur = 45; cur <= width - 45; cur += ticksEvery) {
            res.push(cur)
        }
        return res
    }

    render() {
        const { width, height, minVal, maxVal } = this.props;
        const tickPoints = this.getTickPoints();
        const scale = d3scale.scaleTime();
        scale.domain([0, width - 45]).range([minVal, maxVal]);
        return (
            <G fill='none' x={0} y={0}>
                {tickPoints.map(
                    pos => <Line
                        key={pos}
                        stroke='#ddd'
                        strokeWidth={0.5}
                        x1={pos}
                        y1='0%'
                        x2={pos}
                        y2='100%'/>
                )}
                {tickPoints.map(
                    pos => <Text
                        key={pos}
                        fontSize='8'
                        x={pos - 10}
                        y={height - 30}>
                        {moment(scale(pos)).add(1, 'minutes').format('HH:mm')}
                    </Text>
                )}
            </G>
        )
    }
}