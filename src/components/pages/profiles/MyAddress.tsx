import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../../common/CustomText';
import { FONTS } from '../../../constants/fonts';

const MyAddress = () => {
    return (
        <View>
            <CustomText variant='h5' fontFamily={FONTS.SEMI_BOLD}>
                MyAddress
            </CustomText>
        </View>
    );
};

export default MyAddress;

const styles = StyleSheet.create({});
