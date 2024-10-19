import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    View,
    TextStyle,
    Touchable
} from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import CustomText from './CustomText';
import { FONTS } from '../../constants/fonts';
import { LIGHT_COLORS } from '../../constants/colors';
import { TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    loading?: boolean;
    styleContainer?: object;
    styleTextColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onPress,
    title,
    disabled = false,
    loading = false,
    styleContainer,
    styleTextColor
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[
                styles.btnContainer,
                { backgroundColor: disabled ? '#9197a6' : LIGHT_COLORS.PRIMARY },
                styleContainer
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {loading ? (
                <ActivityIndicator color='white' size='small' />
            ) : (
                <CustomText
                    style={[styles.btnText]}
                    variant='h6'
                    color={styleTextColor}
                    fontFamily={FONTS.SEMI_BOLD}
                >
                    {title}
                </CustomText>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 15,
        borderRadius: 12
    },
    btnText: {
        textAlign: 'center',
        color: 'white'
    }
});

export default CustomButton;
