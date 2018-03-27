import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { PlatformHelper, currencyFormat } from '../../../../platform';

const propTypes = {
    quote: PropTypes.object,
    openDeals: PropTypes.array,
    recommend: PropTypes.string.isRequired,
    postPrice: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired
};

class PostStatistics extends Component {
    constructor (props) {
        super(props);
        this.state = {
            long: 50,
            short: 50,
            pnl: 0
        };
    }
    componentWillMount () {
        if (this.props.openDeals) {
            this.getLongShort(this.props.openDeals);
            this.getPostPnl(this.props.quote, this.props.openDeals);
        }
    }
    componentWillReceiveProps (nextProps) {
        const openDealsCount = this.props.openDeals ? this.props.openDeals.length : 0;
        if (nextProps.quote && nextProps.openDeals) {
            this.getPostPnl(nextProps.quote, nextProps.openDeals);
        }
        if ((nextProps.openDeals && (openDealsCount !== nextProps.openDeals.length)) || (!this.props.openDeals && nextProps.openDeals)) {
            this.getLongShort(nextProps.openDeals);
        }
    }
    getLongShort = (openDeals) => {
        const long = PlatformHelper.getLongShort(openDeals);
        this.setState({long, short: 100 - long});
    };
    getPostPnl = (quote, openDeals) => {
        let pnl = PlatformHelper.getPostPnl(quote, openDeals, this.props.recommend, this.props.postPrice);
        pnl = (pnl === null || pnl === undefined) ? '-' : parseFloat(pnl).toFixed(2);
        this.setState({pnl});
    };
    render () {
        return (
            <View style={styles.container}>
                <Text>{currencyFormat(this.state.pnl)}</Text>
            </View>
        );
    }
}

PostStatistics.propTypes = propTypes;

export default PostStatistics;
