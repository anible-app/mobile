import React from 'react';
import {View, TextInput, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {getCommonStyles} from '../utils/CommonStyles';

export default function IconTextInput(props: {icon: React.FC<SvgProps>; hint: string; theme: AppTheme; style?: ViewStyle}) {
  const styles = getCommonStyles(props.theme);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fefefe',
        borderRadius: 8,
        width: 330,
        height: 50,
        paddingHorizontal: 5,
        alignItems: 'center',
        elevation: 6,
        ...props.style,
      }}>
      <props.icon style={{marginLeft: 10, marginRight: 8}} stroke="#282828" />
      <TextInput
        placeholder={props.hint}
        returnKeyType="done"
        placeholderTextColor={'#B0B0BA'}
        style={{
          ...styles.text,
          color: '#2C2F32',
          fontSize: 18,
          paddingHorizontal: 8,
          flex: 1,
        }}
      />
    </View>
  );
}
