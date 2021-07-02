import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../utils/ThemeContext';
import AnibleHeader from '../../assets/anible_header.svg';
import {StyleSheet, View} from 'react-native';
import {getCommonStyles} from '../utils/CommonStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Settings} from 'react-native-feather';
import {Text} from 'react-native';
import HomeHeaderText from '../components/HomeHeaderText';
import {useEffect} from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import HomeAnimeListItem from '../components/HomeAnimeListItem';

// const HyoukaImage = require('../../assets/samples/hyouka_cover.png');

type Props = StackScreenProps<StackParamList, 'Home'>;

export default function Home(_navProps: Props) {
  let {theme} = React.useContext(ThemeContext);

  const styles = getCommonStyles(theme);

  useEffect(() => {
    changeNavigationBarColor(theme.bg, !theme.isDark, false);
  }, []);

  const ls = StyleSheet.create({
    headerView: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bodyView: {
      paddingHorizontal: 25,
    },
  });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        {/* Header */}
        <View style={ls.headerView}>
          <AnibleHeader fill={theme.text} />
          <Settings stroke={theme.text} style={{marginTop: 12}} />
        </View>

        {/* Body */}
        <View style={ls.bodyView}>
          <HomeHeaderText uncoloredText="Currently" coloredText="watching" theme={theme} />
          <Text style={{...styles.textSemiBold, fontSize: 22, color: '#f44336'}}>TO BE IMPLEMENTED</Text>
          <HomeHeaderText uncoloredText="Recently" coloredText="watched" theme={theme} style={{marginBottom: 12}} />
          <HomeAnimeListItem theme={theme} />
        </View>
      </View>
    </SafeAreaView>
  );
}
