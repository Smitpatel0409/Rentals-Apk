import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';

const HomeScreen = () => {
    return (
        <View>
            <CustomText variant='h2' fontFamily={FONTS.SEMI_BOLD}>
                Explore
            </CustomText>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
