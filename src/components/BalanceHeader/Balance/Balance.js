import { CustomTextBold } from '../../core/CustomText';
import { numberFormat } from '../../../platform';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    balance: PropTypes.number,
    balanceType: PropTypes.string.isRequired,
    platformConnect: PropTypes.bool.isRequired,
};

const BalanceHeader = ({platformConnect, balance}) => {
    return (
        platformConnect
            ? <CustomTextBold style={{color: 'white', fontSize: 12}}>{numberFormat(balance / 1000000, 2)}</CustomTextBold>
            : <CustomTextBold style={{color: 'white', fontSize: 12}}>Loading...</CustomTextBold>
    );
};

BalanceHeader.propTypes = propTypes;

export default BalanceHeader;
