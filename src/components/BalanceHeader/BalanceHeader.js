import { StatusBar, View } from 'react-native';
import { CustomText, CustomTextBold } from '../core/CustomText';
import Balance from './Balance';
import { Icon } from 'react-native-elements'
import React from 'react';
import { styles } from './styles';

const BalanceHeader = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#16254c'/>
            <View style={{flex: 1, paddingRight: 10}}>
                <CustomText style={{fontSize: 10, color: '#999'}}>Free Balance:</CustomText>
                <Balance balanceType="freeBalance" />
            </View>
            <View style={{flex: 1, paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: '#999'}}>
                <CustomText style={{fontSize: 10, color: '#999'}}>Open P&L:</CustomText>
                <Balance balanceType="unrealizedPnl" />
            </View>
            <View style={{flex: 1, paddingLeft: 10, borderLeftWidth: 1, borderLeftColor: '#999'}}>
                <CustomText style={{fontSize: 10, color: '#999'}}>Balance</CustomText>
                <Balance balanceType="balance" />
            </View>
        </View>
    );
};

export default BalanceHeader;
