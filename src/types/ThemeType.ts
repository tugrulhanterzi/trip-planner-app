import { AppThemes } from '_types/index';

export interface State {
  data: ThemeType;
}

export interface ThemeType {
  title: AppThemes;
  primaryColors: {
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
    primary800: string;
    primary900: string;
  };
  neutralColors: {
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
  };
  otherColors: {
    success: string;
    warning: string;
    danger: string;
    divider: string;
    bgLight: string;
    white: string;
    purple: string;
  };
  red: {
    red50: string;
    red100: string;
    red200: string;
    red300: string;
    red400: string;
  };
  blue: {
    blue50: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
  };
  orange: {
    orange50: string;
    orange100: string;
    orange200: string;
    orange300: string;
    orange400: string;
    orange500: string;
    orange600: string;
  };
}
