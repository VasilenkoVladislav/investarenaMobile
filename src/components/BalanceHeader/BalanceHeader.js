import { StatusBar, View } from 'react-native';
import { CustomText, CustomTextBold } from '../core/CustomText';
import { Icon } from 'react-native-elements'
import React from 'react';
import { styles } from './styles';

const BalanceHeader = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#16254c'/>
            <Icon name='search' color='#999' containerStyle={{flex: 1}} iconStyle={{alignSelf: 'flex-start'}}/>
            <View style={{flex: 2, paddingHorizontal: 10}}>
                <CustomText style={{fontSize: 10, color: '#999'}}>Free Balance:</CustomText>
                <CustomTextBold style={{color: 'white'}}>$300</CustomTextBold>
            </View>
            <View style={{flex: 2, paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: '#999'}}>
                <CustomText style={{fontSize: 10, color: '#999'}}>Open P&L:</CustomText>
                <CustomTextBold style={{color: 'white'}}>$300</CustomTextBold>
            </View>
            <View style={{flex: 2, paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: '#999'}}>
                <CustomText style={{fontSize: 10, color: '#999'}}>Balance</CustomText>
                <CustomTextBold style={{color: 'white'}}>$300</CustomTextBold>
            </View>
        </View>
    );
};

export default BalanceHeader;
