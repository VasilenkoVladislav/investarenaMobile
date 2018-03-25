import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { currentTime } from '../../../../helpers/currentTime';
import { Icon } from 'react-native-elements'
import { timeForecastRemain } from '../../../../helpers/diffDateTime';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    postForecast: PropTypes.string.isRequired
};

class PostForecast extends Component {
    constructor (props) {
        super(props);
        this.state = { time: null };
    }
    componentDidMount () {
        currentTime.subscribeTick(this.handleUpdateTimeRemain);
    }
    componentWillUnmount () {
        currentTime.unsubscribeTick(this.handleUpdateTimeRemain);
    }
    handleUpdateTimeRemain = () => {
        this.setState({ time: timeForecastRemain(this.props.postForecast) });
    };
    render () {
        return (
            <View style={styles.container}>
                <Icon name='update' size={16} color='#999' containerStyle={styles.imageContainer}/>
                <View>
                    <Text style={styles.validityText}>Validity period</Text>
                    <Text style={styles.validityTime}>{this.state.time}</Text>
                </View>
            </View>
        );
    }
}

PostForecast.propTypes = propTypes;

export default PostForecast;
