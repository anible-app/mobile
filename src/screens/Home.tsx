import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../utils/ThemeContext';

import {View} from 'react-native';
import {getCommonStyles} from '../utils/CommonStyles';

type Props = StackScreenProps<StackParamList, 'Home'>;

export default function Home(_navProps: Props) {
  let {theme} = React.useContext(ThemeContext);

  const styles = getCommonStyles(theme);

  return (
    <View style={styles.root}>
      {/* debug square, remove this! */}
      <View style={{height: 200, width: 200, backgroundColor: '#f44336'}} />
    </View>
  );
}
