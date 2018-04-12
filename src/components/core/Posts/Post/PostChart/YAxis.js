import React, { Component } from 'react'
import { G, Line, Text } from 'react-native-svg'
import * as d3scale from 'd3-scale';
import PropTypes from 'prop-types';

export default class Axis extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        ticks: PropTypes.number.isRequired,
        minVal: PropTypes.number.isRequired,
        maxVal: PropTypes.number.isRequired
    };

    getTickPoints () {
        const { height, ticks } = this.props;
        let res = [];
        let ticksEvery = Math.floor((height - 20) / (ticks));
        for (let cur = 20; cur <= height - 20; cur += ticksEvery) {
            res.push(cur)
        }
        return res
    }

    formatQuote = (quotePrice) => {
        const countBefore = (quotePrice.toString()).split('.')[0].length;
        let countAfter = (quotePrice.toString()).split('.')[1] ? (quotePrice.toString()).split('.')[1].length : countBefore;
        while (countBefore + countAfter > 6) {
            countAfter = countAfter - 1;
        }
        return quotePrice.toFixed(countAfter);
    };

    render() {
        const { width, height, minVal, maxVal } = this.props;
        const tickPoints = this.getTickPoints();
        const scale = d3scale.scaleLinear();
        scale.domain([height - 20, 20]).range([minVal, maxVal]);
        return (
            <G fill='none' x={0} y={0}>
                {tickPoints.map(
                    pos => <Line
                        key={pos}
                        stroke='#ddd'
                        strokeWidth={0.5}
                        x1='0%'
                        y1={pos}
                        x2='86%'
                        y2={pos}/>
                )}
                {tickPoints.map(
                    pos => <Text
                        key={pos}
                        fontSize='10'
                        x={width - 45}
                        y={pos + 5}>
                        {this.formatQuote(scale(pos) / 1000000)}
                    </Text>
                )}
            </G>
        )
    }
}