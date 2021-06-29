import {StyleSheet} from 'react-native';

export const getCommonStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.bg,
    },

    // text related styles
    textLight: {
      fontFamily: 'Inter-Light',
      color: `${theme.text}`,
    },

    text: {
      fontFamily: 'Inter-Regular',
      color: `${theme.text}`,
    },

    textSemiBold: {
      fontFamily: 'Inter-SemiBold',
      color: `${theme.text}`,
    },

    textBold: {
      fontFamily: 'Inter-Bold',
      color: `${theme.text}`,
    },

    debugStyle: {
      backgroundColor: '#f44336',
    },
  });
};
