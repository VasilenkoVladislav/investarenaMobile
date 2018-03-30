import { CustomText, CustomTextBold } from '../../../core/CustomText';
import React, { PureComponent } from 'react';
import { PlatformHelper, currencyFormat } from '../../../../platform';
import { View } from 'react-native';
import { Bar } from 'react-native-progress';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    quote: PropTypes.object,
    quoteSettings: PropTypes.object,
    postId: PropTypes.string.isRequired,
    openDeals: PropTypes.array.isRequired,
    recommend: PropTypes.string.isRequired,
    postPrice: PropTypes.string.isRequired
};

class PostStatistics extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            longShort: 0.5,
            pnl: 0
        };
    }
    componentWillMount () {
        if (this.props.openDeals.length > 0) {
            this.getLongShort(this.props.openDeals);
            this.getPostPnl(this.props.quote, this.props.openDeals);
        }
    }
    componentWillReceiveProps (nextProps) {
        const openDealsCount = this.props.openDeals.length;
        if (nextProps.quote && nextProps.openDeals.length > 0) {
            this.getPostPnl(nextProps.quote, nextProps.openDeals);
        }
        if (nextProps.openDeals.length > 0 && (openDealsCount !== nextProps.openDeals.length)) {
            this.getLongShort(nextProps.openDeals);
        }
    }
    getLongShort = (openDeals) => {
        const longShort = (PlatformHelper.getLongShort(openDeals)) / 100;
        this.setState({longShort});
    };
    getPostPnl = (quote, openDeals) => {
        let pnl = PlatformHelper.getPostPnl(quote, openDeals, this.props.recommend, this.props.postPrice);
        pnl = (pnl === null || pnl === undefined) ? '-' : parseFloat(pnl).toFixed(2);
        this.setState({pnl});
    };
    render () {
        return (
            <React.Fragment>
                {this.props.quote && this.props.quoteSettings && this.props.quote.askPrice !== '0.000' ?
                    <View style={styles.container}>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <CustomText style={{fontSize: 12}}>
                                    {(this.state.longShort * 100)}%
                                </CustomText>
                                <CustomText style={{fontSize: 12}}>
                                    {100 - (this.state.longShort * 100)}%
                                </CustomText>
                            </View>
                            <Bar color='#ee5451'
                                 unfilledColor='#1ebea5'
                                 borderColor='transparent'
                                 progress={this.state.longShort}
                                 width={120}
                                 height={2}
                                 useNativeDriver={true}/>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <CustomText style={{fontSize: 10, marginRight: 5}}>
                                    long
                                </CustomText>
                                <CustomText style={{fontSize: 10}}>
                                    short
                                </CustomText>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <CustomTextBold style={{fontSize: 12, marginRight: 5}}>Open Deals</CustomTextBold>
                            <CustomTextBold style={{fontSize: 12, color: '#3a79ee'}}>{this.props.openDeals.length}</CustomTextBold>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <CustomTextBold style={{fontSize: 12, marginRight: 5}}>PnL</CustomTextBold>
                            <CustomTextBold style={{fontSize: 12, color: '#3a79ee'}}>{currencyFormat(this.state.pnl)}</CustomTextBold>
                        </View>
                    </View>
                    : null}
            </React.Fragment>
        );
    }
}

PostStatistics.propTypes = propTypes;

export default PostStatistics;
