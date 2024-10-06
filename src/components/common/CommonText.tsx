import React, { ReactNode } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { useColorScheme } from 'react-native';
import { LIGHT_COLORS, DARK_COLORS } from '../../constants/colors';
import {FONTS} from "../../constants/fonts"
import {FONT_SIZES} from "../../constants/fontSizes"

interface CustomTextProps extends TextProps {
    children: ReactNode;
    style?: StyleProp<TextStyle>;
    fontFamily?: string;
    fontSize?: number;
    color?: string;
  }

const CommonText: React.FC<CustomTextProps> = ({
  children,
  style = {},
  fontFamily = FONTS.REGULAR,
  fontSize = FONT_SIZES.MEDIUM,
  color = "black",
  ...props
}) => {
  const theme = useColorScheme(); // 'light' or 'dark'
  const COLORS = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize,
          color: color || COLORS.TEXT, // Default to text color based on theme
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CommonText;
