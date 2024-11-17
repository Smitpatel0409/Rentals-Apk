import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { FONTS } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import { LIGHT_COLORS } from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface TextFieldProps {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClear?: () => void;
    right?: boolean;
    label?: string;
    isCalender?: boolean;
    isPassword?: boolean;
    onPress?: () => void;
}

const CustomTextField: React.FC<TextFieldProps & React.ComponentProps<TextInput>> = ({
    leftIcon,
    rightIcon,
    onClear,
    right = true,
    label,
    isCalender = false,
    isPassword = false,
    onPress,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.flexRow}>
                {leftIcon}
                {isCalender ? (
                    <Pressable onPress={onPress} style={styles.pressable}>
                        <TextInput
                            {...props}
                            style={[
                                styles.inputContainer,
                                right ? styles.inputWithRightIcon : null
                            ]}
                            placeholderTextColor='#cccccc'
                        />
                    </Pressable>
                ) : (
                    <TextInput
                        {...props}
                        style={[styles.inputContainer, styles.inputWithRightIcon]}
                        placeholderTextColor='#cccccc'
                        secureTextEntry={isPassword && !showPassword}
                    />
                )}

                {/* Right Icon Container */}
                <View style={styles.rightIconContainer}>
                    <View style={styles.clearIcon}>
                        {/* Show eye icon if it's a password field */}
                        {isPassword && (
                            <Pressable onPress={togglePasswordVisibility}>
                                <Ionicons
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    size={RFValue(16)}
                                    color={LIGHT_COLORS.GRAY}
                                />
                            </Pressable>
                        )}

                        {/* Show clear icon only if not a password field and input has a value */}
                        {!isPassword && props.value?.length != 0 && right && (
                            <Pressable onPress={onClear}>
                                <Icon name='close-circle-sharp' size={RFValue(16)} color='#ccc' />
                            </Pressable>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CustomTextField;

const styles = StyleSheet.create({
    label: {
        fontFamily: FONTS.REGULAR,
        fontSize: RFValue(12),
        color: LIGHT_COLORS.TEXT,
        marginBottom: 2,
        marginTop: 5
    },
    text: {
        width: '10%',
        marginLeft: 10
    },
    flexRow: {
        flexDirection: 'row',
        paddingLeft: 14,
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#999999',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowColor: '#999999',
        marginBottom: 5
    },
    inputContainer: {
        height: '100%',
        width: '76%',
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: RFValue(12),
        paddingBottom: 6,
        color: LIGHT_COLORS.TEXT
    },
    inputWithRightIcon: {
        width: '76%'
    },
    rightIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    clearIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    pressable: {
        flexDirection: 'row'
    }
});
