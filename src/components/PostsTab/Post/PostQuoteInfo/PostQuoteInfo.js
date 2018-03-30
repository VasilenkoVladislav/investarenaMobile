import { CustomText, CustomTextBold } from '../../../core/CustomText';
import React from 'react';
import Favorite from '../../../core/Favorite';
import PropTypes from 'prop-types';
import PostCurrentPrice from './PostCurrentPrice';
import PostDifference from './PostDifference';
import { styles } from './styles'
import { quoteFormat } from '../../../../platform';
import { View } from 'react-native';

const propTypes = {
    quote: PropTypes.object,
    quoteSettings: PropTypes.object,
    profitability: PropTypes.number,
    isExpired: PropTypes.bool.isRequired,
    postPrice: PropTypes.string.isRequired,
    forecast: PropTypes.string.isRequired,
    recommend: PropTypes.string.isRequired,
};

const PostQuoteInfo = ({quote, quoteSettings, recommend, postPrice, isExpired, profitability, forecast}) => {
    return (
        <React.Fragment>
            {quote && quoteSettings && quote.askPrice !== '0.000' ?
                <View style={styles.container}>
                    <View style={styles.blockWrap}>
                        <Favorite quoteSecurity={quote.security} size={25}/>
                        <CustomTextBold style={styles.quoteName}>{quoteSettings.name}</CustomTextBold>
                        <View style={[styles.recommendWrap, {backgroundColor: recommend === 'Buy' ? '#1ebea5' : '#ee5451'}]}>
                            <CustomText style={styles.recommendText}>{recommend.toUpperCase()}</CustomText>
                            {quoteFormat(postPrice, quoteSettings, 'white')}
                        </View>
                        <View
                            style={[styles.recommendTriangle, {borderBottomColor: recommend === 'Buy' ? '#1ebea5' : '#ee5451'}]}/>
                    </View>
                    <View style={styles.blockWrap}>
                        <PostCurrentPrice quoteSettings={quoteSettings}
                                          quote={quote}
                                          recommend={recommend}/>
                        <PostDifference quoteSettings={quoteSettings}
                                        isExpired={isExpired}
                                        profitability={profitability}
                                        quote={quote}
                                        forecast={forecast}
                                        postPrice={postPrice}
                                        recommend={recommend}/>
                    </View>
                </View>
                : null }
        </React.Fragment>
    )
};

PostQuoteInfo.propTypes = propTypes;

export default PostQuoteInfo;

