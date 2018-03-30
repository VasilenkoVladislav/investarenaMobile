import React, { Component } from 'react';
import { CustomTextBold } from '../../../core/CustomText';
import { currentTime } from '../../../../helpers/currentTime';
import { Icon } from 'react-native-elements'
import { timeForecastRemain } from '../../../../helpers/diffDateTime';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { styles } from './styles';

const propTypes = {
    postForecast: PropTypes.string.isRequired
};

class PostForecast extends Component {
    constructor (props) {
        super(props);
        this.state = { time: '' };
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
                <CustomTextBold>{this.state.time}</CustomTextBold>
            </View>
        );
    }
}

PostForecast.propTypes = propTypes;

export default PostForecast;
