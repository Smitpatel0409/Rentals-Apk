import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';

const SearchScreen = () => {
    return (
        <View>
            <CustomText variant='h1' fontFamily={FONTS.SEMI_BOLD}>
                SearchScreen
            </CustomText>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({});
