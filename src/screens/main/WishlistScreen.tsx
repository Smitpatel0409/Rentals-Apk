import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';

const WishlistScreen = () => {
    return (
        <View>
            <CustomText variant='h2' fontFamily={FONTS.SEMI_BOLD}>
                WishlistScreen
            </CustomText>
        </View>
    );
};

export default WishlistScreen;

const styles = StyleSheet.create({});
