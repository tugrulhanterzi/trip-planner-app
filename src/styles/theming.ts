import { createTheming } from '@callstack/react-theme-provider';

import { ThemeType } from '_types/ThemeType';
import { AppThemes, ThemeProviderType } from '_types/index';

export const themes = {
  light: {
    title: AppThemes.Light,
    primaryColors: {
      primary50: '#E0F2FF',
      primary100: '#B3E0FF',
      primary200: '#80CFFF',
      primary300: '#4DB8FF',
      primary400: '#1AA7FF',
      primary500: '#228BE6',
      primary600: '#1C6FC9',
      primary700: '#1657A2',
      primary800: '#0E3E7A',
      primary900: '#082853',
    },
    neutralColors: {
      neutral50: '#F7F7F7',
      neutral100: '#DDE2E8',
      neutral200: '#B3C2CE',
      neutral300: '#8EA3B3',
      neutral400: '#6E8597',
      neutral500: '#3A566A',
      neutral600: '#1F3C51',
      neutral700: '#163043',
      neutral800: '#0F2637',
      neutral900: '#081C2C',
    },
    otherColors: {
      success: '#70B582',
      warning: '#E8A13A',
      danger: '#DD524C',
      divider: '#EAEEF2',
      bgLight: '#F5F7F9',
      white: '#FFFFFF',
      purple: '#8B8BEC',
    },
    red: {
      red50: '#FADCD8',
      red100: '#F7C5BD',
      red200: '#F4A79D',
      red300: '#FA6B52',
      red400: '#E8503A',
    },
    blue: {
      blue50: '#ECF5FF',
      blue100: '#AAD3FF',
      blue200: '#80BDFF',
      blue300: '#55A8FF',
      blue400: '#007CFF',
    },
    orange: {
      orange50: '#FFF0D9',
      orange100: '#FFE5BF',
      orange200: '#FFD89F',
      orange300: '#FFCC7F',
      orange400: '#FFB23F',
      orange500: '#FFEC99',
      orange600: '#FAB005',
    },
  } as ThemeType,
};

const { ThemeProvider, withTheme, useTheme } = createTheming(themes?.light);

const IThemeProviders = ThemeProvider as ThemeProviderType<ThemeType>;

export { IThemeProviders, useTheme, withTheme };
