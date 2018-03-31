import React from 'react';
import PropTypes from 'prop-types';
import { quoteFormat } from '../../../../../../platform';
import { styles } from './styles'
import { View } from 'react-native';

const propTypes = {
    quote: PropTypes.object,
    quoteSettings: PropTypes.object,
    recommend: PropTypes.string.isRequired,
};


const PostCurrentPrice = ({recommend, quote, quoteSettings}) => {
    const currentPrice = () => {
        const currentPrice = recommend.toLowerCase() === 'buy' ? quote.askPrice : quote.bidPrice;
        return quoteFormat(currentPrice, quoteSettings, 'black');
    };
    return (
        <View style={styles.container}>
            {quote.state === 'up'
                ? <View style={[styles.triangle, { borderBottomColor: '#1ebea5' }]}/>
                : <View style={{marginTop: 6}}/>}
            {currentPrice()}
            {quote.state === 'down'
                ? <View style={[styles.triangle, { borderBottomColor: '#ee5451', transform: [{rotate: '180deg'}] }]}/>
                : <View style={{marginBottom: 6}}/>}
        </View>
    )
};

PostCurrentPrice.propTypes = propTypes;

export default PostCurrentPrice;
