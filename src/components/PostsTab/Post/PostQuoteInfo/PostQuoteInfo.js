import { View, Text } from 'react-native';
import React from 'react';
import Favorite from '../../../core/Favorite';
import PropTypes from 'prop-types';
import { styles } from './styles'
import { quoteFormat } from '../../../../platform';

const propTypes = {
    quote: PropTypes.object,
    quoteSettings: PropTypes.object,
    profitability: PropTypes.number,
    postPrice: PropTypes.string.isRequired,
    forecast: PropTypes.string.isRequired,
    recommend: PropTypes.string.isRequired,
};

const PostQuoteInfo = ({quote, quoteSettings, recommend, postPrice}) => {
    return (
        <View style={styles.container}>
            <Favorite quoteSecurity={quote.security} size={16}/>
            <Text style={styles.quoteName}>{quoteSettings.name}</Text>
            <View style={{flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#1ebea5',
                borderBottomLeftRadius: 3,
                borderTopLeftRadius: 3,
                }}>
                <Text style={{marginRight: 5, color: 'white'}}>{recommend.toUpperCase()}</Text>
                {quoteFormat(postPrice, quoteSettings)}
            </View>
            <View>
            </View>
        </View>
    )
};

PostQuoteInfo.propTypes = propTypes;

export default PostQuoteInfo;

