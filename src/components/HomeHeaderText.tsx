import React from 'react';

import {Text, ViewStyle} from 'react-native';
import {getCommonStyles} from '../utils/CommonStyles';

export default function HomeHeaderText(props: {uncoloredText: string; coloredText: string; theme: AppTheme; style?: ViewStyle}) {
  const styles = getCommonStyles(props.theme);

  return (
    <Text style={{...styles.textSemiBold, fontSize: 22, marginTop: 20, ...props.style}}>
      {props.uncoloredText} <Text style={{...styles.text, color: props.theme.accentTwo}}>{props.coloredText}</Text>
    </Text>
  );
}
