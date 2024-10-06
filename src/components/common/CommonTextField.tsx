import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP } from 'react-native-responsive-screen';

type Props = {
  title?: string;
  // icon: keyof typeof Feather.glyphMap;
  placeholder?: string;
  isSecureTextEntry?: boolean;
  isShowAndHidePasswordIconDisplay?: boolean;
  keyBoardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
};

type KeyboardTypeOptions =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'number-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search'
  | 'visible-password';

const CommonTextField = ({
  title,
  // icon,
  placeholder,
  isSecureTextEntry,
  isShowAndHidePasswordIconDisplay,
  keyBoardType,
  value,
  onChangeText,
  onBlur,
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
        // if (onBlur) onBlur();
    };
  return (
    <View>
      <TextInput style={{height:heightPercentageToDP("6.5%"),shadowColor:"red",shadowOffset:{width:8,height:16},shadowRadius:9,shadowOpacity:0.6,elevation:5}} keyboardType='numeric' outlineStyle={{borderWidth:0.5,borderRadius:12}} label="Mobile Number" mode='outlined' placeholder='Enter mobile number' outlineColor='#999999' activeOutlineColor='#1aacac' maxLength={10} multiline={false} />
    </View>
  );
};

export default CommonTextField;

const styles = StyleSheet.create({});
