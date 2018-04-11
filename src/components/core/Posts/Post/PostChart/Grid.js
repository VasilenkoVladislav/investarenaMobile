import { G, Line } from 'react-native-svg';
import React from 'react';
import PropTypes from 'prop-types';

const Horizontal = ({ ticksY = [], y, gridProps = {} }) => {
    return (
        <G>
            {
                ticksY.map(tick => (
                    <Line
                        key={ tick }
                        x1={ '0%' }
                        x2={ '100%' }
                        y1={ y(tick) }
                        y2={ y(tick) }
                        strokeWidth={ 1 }
                        stroke={ 'rgba(0,0,0,0.2)' }
                        { ...gridProps }/>
                ))

            }
        </G>
    )
};

const Vertical = ({ ticksX = [], x, gridProps = {} }) => {
    return (
        <G>
            {
                ticksX.map((tick, index) => (
                    <Line
                        key={ index }
                        y1={ '0%' }
                        y2={ '100%' }
                        x1={ x(tick) }
                        x2={ x(tick) }
                        strokeWidth={ 1 }
                        stroke={ 'rgba(0,0,0,0.2)' }
                        { ...gridProps }/>
                ))

            }
        </G>
    )
};

const Both = (props) => {
    return (
        <G>
            <Horizontal { ...props }/>
            <Vertical { ...props }/>
        </G>
    )
};

Vertical.propTypes = {
    x: PropTypes.func.isRequired,
    ticksY: PropTypes.array.isRequired,
    gridProps: PropTypes.object,
};

Horizontal.propTypes = {
    y: PropTypes.func.isRequired,
    ticksX: PropTypes.array.isRequired,
    gridProps: PropTypes.object,
};

Both.propTypes = {
    ...Vertical.propTypes,
    ...Horizontal.propTypes,
};

export default Both

export {
    Horizontal,
    Vertical,
    Both,
}