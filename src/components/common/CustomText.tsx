import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { FONTS } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { LIGHT_COLORS } from '../../constants/colors';

interface TextProps {
    variant?: 'h1' | 'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9' | 'body';
    color?: string;
    fontFamily?: FONTS;
    fontSize?: number;
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
    numberOfLines?: number;
    onLayout?: (event: Object) => void;
}

const CustomText: React.FC<TextProps> = ({
    variant = 'body',
    color = LIGHT_COLORS.TEXT,
    fontFamily = FONTS.REGULAR,
    fontSize,
    style,
    children,
    numberOfLines,
    onLayout,
    ...props
}) => {
    let computedFontSize: number;
    switch (variant) {
        case 'h1':
            computedFontSize = RFValue(fontSize || 22);
            break;
        case 'h2':
            computedFontSize = RFValue(fontSize || 20);
            break;
        case 'h3':
            computedFontSize = RFValue(fontSize || 18);
            break;
        case 'h4':
            computedFontSize = RFValue(fontSize || 16);
            break;
        case 'h5':
            computedFontSize = RFValue(fontSize || 14);
            break;
        case 'h6':
            computedFontSize = RFValue(fontSize || 13);
            break;
        case 'h7':
            computedFontSize = RFValue(fontSize || 12);
            break;
        case 'h8':
            computedFontSize = RFValue(fontSize || 10);
            break;
        case 'h9':
            computedFontSize = RFValue(fontSize || 9);
            break;
        case 'body':
            computedFontSize = RFValue(fontSize || 12);
            break;
    }

    return (
        <Text
            onLayout={onLayout}
            style={[
                { color: color },
                { fontSize: computedFontSize },
                { fontFamily: fontFamily },
                { ...style },
                styles.text
            ]}
            numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
            {...props}
        >
            {children}
        </Text>
    );
};

export default CustomText;

const styles = StyleSheet.create({
    text: {
        textAlign: 'left'
        // paddingHorizontal:1,
    }
});
