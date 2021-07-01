import React, {useEffect} from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../utils/ThemeContext';
import {ImageBackground, View, KeyboardEvent, Keyboard} from 'react-native';
import {IconButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {getCommonStyles} from '../utils/CommonStyles';
import IconTextInput from '../components/IconTextInput';
import AnibleHeader from '../../assets/anible_header.svg';
import GoogleIcon from '../../assets/login_page/google_icon.svg';
import LoginIcon from '../../assets/login_page/login_icon.svg';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import ForgotIcon from '../../assets/login_page/forgot_icon.svg';
import {Lock, User} from 'react-native-feather';
import {animated, useSpring} from '@react-spring/native';
const LoginBackground = require('../../assets/login_page/login_bg.png');

type Props = StackScreenProps<StackParamList, 'Login'>;

export default function Login(_navProps: Props) {
  let {theme} = React.useContext(ThemeContext);

  const styles = getCommonStyles(theme);

  const _kbShown = (e: KeyboardEvent) =>
    inputPropsApi.start({
      from: {marginBottom: 0},
      to: {marginBottom: e.endCoordinates.height / 1.3},
    });

  const _kbHidden = () =>
    inputPropsApi.start({
      to: {marginBottom: 0},
    });

  const [inputProps, inputPropsApi] = useSpring(() => ({
    marginBottom: 0,
  }));

  // effects
  useEffect(() => {
    // set up keyboard related listeners
    Keyboard.addListener('keyboardDidShow', _kbShown);
    Keyboard.addListener('keyboardDidHide', _kbHidden);

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      changeNavigationBarColor('#191916', true, false);
    }, 100);
  }, [theme]);

  // local styles
  const ls = StyleSheet.create({
    headerView: {
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%',
    },
    loginButton: {
      height: 60,
      width: 60,
      borderRadius: 60,
      backgroundColor: theme.accentColor + '60',
      marginHorizontal: 20,
    },
    miscButton: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.root}>
      <ImageBackground source={LoginBackground} style={{height: '100%', width: '100%'}}>
        <View style={ls.headerView}>
          {/* Header Text */}
          <AnibleHeader fill={theme.text} style={{marginTop: 60}} />

          {/* Main Login Content */}
          <animated.View style={{width: '100%', ...inputProps}}>
            <IconTextInput icon={User} hint="Username or Email" theme={theme} style={{alignSelf: 'center'}} />
            <IconTextInput icon={Lock} hint="Password" theme={theme} style={{marginTop: 15, alignSelf: 'center'}} />

            <View style={{paddingHorizontal: 20, paddingVertical: 20, alignSelf: 'center', flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon={GoogleIcon} style={{...ls.miscButton, backgroundColor: '#fbfbfb', opacity: 0.8}} />
              <IconButton icon={LoginIcon} style={ls.loginButton} />
              <IconButton icon={ForgotIcon} style={{...ls.miscButton, backgroundColor: '#fbfbfb', opacity: 0.8}} />
            </View>
          </animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}
