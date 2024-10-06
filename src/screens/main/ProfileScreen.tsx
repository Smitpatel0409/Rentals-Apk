import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';

const ProfileScreen = () => {
    return (
        <View>
            <CustomText variant='h2' fontFamily={FONTS.SEMI_BOLD}>
                ProfileScreen
            </CustomText>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
