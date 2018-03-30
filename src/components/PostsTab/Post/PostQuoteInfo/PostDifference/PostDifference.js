import { CustomText, CustomTextBold } from '../../../../core/CustomText';
import React, { PureComponent } from 'react';
import { currentTime } from '../../../../../helpers/currentTime';
import moment from 'moment';
import PropTypes from 'prop-types';
import { styles } from './styles'
import { View } from 'react-native';

const propTypes = {
    quoteSettings: PropTypes.object,
    quote: PropTypes.object,
    profitability: PropTypes.number,
    forecast: PropTypes.string.isRequired,
    isExpired: PropTypes.bool.isRequired,
    postPrice: PropTypes.string.isRequired,
    recommend: PropTypes.string.isRequired
};

class PostDifference extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            colorProfit: '#888888',
            profitability: '-',
            isExpired: this.props.isExpired
        };
    }
    componentDidMount () {
        this.estimateProfitability(this.props);
    }
    componentWillReceiveProps (nextProps) {
        if (!this.state.isExpired) {
            if (currentTime.getTime() < moment(this.props.forecast).valueOf()) {
                this.estimateProfitability(nextProps);
            } else {
                this.setState({isExpired: true});
            }
        }
    }
    profit = (quoteSettings, quote) => {
        if (quote.askPrice !== '-' && quote.bidPrice !== '-') {
            if (this.props.recommend === 'Buy') {
                return Math.trunc((quote.askPrice - this.props.postPrice) * 1000000 / quoteSettings.tickSize);
            } else {
                return Math.trunc((this.props.postPrice - quote.bidPrice) * 1000000 / quoteSettings.tickSize);
            }
        } else {
            return '-';
        }
    };
    estimateProfitability = (props) => {
        let profitability = props.profitability !== undefined ? props.profitability : '-';
        let colorProfit = '#888888';
        if (!this.state.isExpired) {
            const quote = props.quote;
            const quoteSettings = props.quoteSettings;
            profitability = this.profit(quoteSettings, quote);
        }
        if (profitability < 0 && !(profitability === '-' || profitability === 0)) {
            colorProfit = '#ee5451'
        } else if (profitability > 0 && !(profitability === '-' || profitability === 0)) {
            colorProfit = '#1ebea5';
        }
        this.setState({profitability, colorProfit});
    };
    render () {
        return (
            <View style={styles.container}>
                <CustomText style={styles.profitText}>Profitability:</CustomText>
                <CustomTextBold style={[styles.profitValue, { color: this.state.colorProfit }]}>{this.state.profitability + ' pips'}</CustomTextBold>
            </View>
        )
    }
}

PostDifference.propTypes = propTypes;

export default PostDifference;

