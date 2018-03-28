import { CustomText, CustomTextBold } from '../components/core/CustomText';
import React from 'react';
import { View } from 'react-native';

export function quoteFormat (price, quoteSettings, color) {
    if (price === '-' || !quoteSettings) {
        return <CustomText>-</CustomText>;
    } else {
        const rate = parseRate(price, quoteSettings.tickSize, quoteSettings.priceRounding / 1000000);
        if (rate) {
            let dot = rate.dot === 0 ? '' : '.';
            return <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CustomText style={{fontSize: 10, color, paddingTop: 3}}>
                    {rate.small}
                </CustomText>
                <CustomTextBold style={{fontSize: 14, color}}>
                    {dot + rate.big}
                </CustomTextBold>
                <CustomText style={{fontSize: 10, color, alignSelf: 'flex-start'}}>
                    {rate.mid}
                </CustomText>
            </View>;
        }
    }
}

export function parseRate (val, tick, rounding) {
    if (typeof (val) === 'string') {
        try {
            val = parseFloat(val);
        } catch (e) {
            return {
                result: '-'
            };
        }
    }
    let temp = getTrimmedPrice(val, rounding, tick);
    if (!isNaN(temp)) {
        val = temp;
    } else {
        val = '' + val;
    }

    let pt = val.indexOf('.');
    let res = val;
    let midSize = '';
    let dot = 0;
    if (pt > 0) {
        let difference = tick === 1000 ? 6 : 7;
        let toRemove = Math.max(0, parseInt(val.replace('.', '')).toFixed(0).length - difference);
        let lastIndex = val.length - 1;
        if (lastIndex - pt >= toRemove) {
            res = val = val.substr(0, val.length - toRemove);
        }
        let smallSize = '';
        let bigSize = '';
        let arr = val.split('.');
        let decLen = arr[1].length;
        if (decLen > 2) {
            let fDec = decLen - 3;
            smallSize = arr[0] + '.' + arr[1].substr(0, fDec);
            bigSize = arr[1].substr(fDec, 2);
            midSize = arr[1].substr(decLen - 1, 1);
        } else if (decLen === 2) {
            dot = 1;
            smallSize = arr[0];
            bigSize = arr[1];
        } else {
            dot = 2;
            let intLen = arr[0].length;
            smallSize = arr[0].substr(0, intLen - 2);
            bigSize = arr[0].substr(intLen - 2, 2);
            midSize = arr[1];
        }
        return {
            small: smallSize,
            big: bigSize,
            mid: midSize,
            dot: dot
        };
    }

    if (typeof (res) === 'undefined') {
        return {
            result: '-'
        };
    }
}

const getTrimmedPrice = (value, rounding, tick, dindex) => {
    let t = rounding * 1000000;
    let len;
    if (tick > 1000) {
        if (rounding === 1) {
            len = 2;
        } else {
            len = 3;
        }
    } else {
        len = 5;
    }
    let val = Math.round(value * t) / t;
    return val.toFixed(dindex !== undefined ? dindex : len);
};
