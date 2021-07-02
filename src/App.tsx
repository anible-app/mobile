import React, {useEffect, useState} from 'react';
import {configureFonts, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar, StatusBarStyle} from 'expo-status-bar';
import {Appearance, View} from 'react-native';
import {ThemeProvider, darkTheme, lightTheme} from './utils/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Home from './screens/Home';
import Login from './screens/Login';
import {StyleSheet} from 'react-native';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    android: {
      regular: {
        fontFamily: 'Inter-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Inter-SemiBold',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Inter-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Inter-Thin',
        fontWeight: 'normal',
      },
    },
  }),
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFE082',
    accent: '#f1c40f',
  },
};

export default function Main() {
  // keep track of app theme so that it can be changed internally
  const [currentTheme, setCurrentTheme] = useState(() => (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme));

  // change app theme when the system theme changes
  useEffect(() => {
    const listener = (prefs: Appearance.AppearancePreferences) => {
      setCurrentTheme(prefs.colorScheme === 'dark' ? darkTheme : lightTheme);
    };

    Appearance.addChangeListener(listener);

    return () => {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  // change the navigation bar color when the app theme changes
  useEffect(() => {
    changeNavigationBarColor(currentTheme.bg, !currentTheme.isDark, false);
  }, [currentTheme]);

  const ls = StyleSheet.create({
    root: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
      backgroundColor: currentTheme.bg,
    },
  });

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <ThemeProvider
          value={{
            theme: currentTheme,
            switchTheme: () => setCurrentTheme(currentTheme.isDark ? lightTheme : darkTheme),
          }}>
          <View style={ls.root}>
            <App />
          </View>
        </ThemeProvider>
        <StatusBar style={currentTheme.statusBar as StatusBarStyle} />
      </NavigationContainer>
    </PaperProvider>
  );
}

const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
