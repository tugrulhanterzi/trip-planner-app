import { StyleSheet } from 'react-native';

import { moderateScale } from '_styles/scaling';

export const Fonts = {
  Inter: 'Inter-Regular',
  InterMedium: 'Inter-Medium',
  InterSemibold: 'Inter-Semibold',
  InterBold: 'Inter-Bold',
};

const AppFonts = {
  regular: Fonts.Inter,
  medium: Fonts.InterMedium,
  semibold: Fonts.InterSemibold,
  bold: Fonts.InterBold,
};

export const TextStyle = StyleSheet.create({
  h1: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(32),
  },
  h2: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(28),
  },
  h2semi: {
    fontFamily: AppFonts.semibold,
    fontSize: moderateScale(28),
  },
  h3: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(24),
  },
  h4: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(20),
  },
  h5: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(16),
  },
  h6: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(14),
  },
  bodyLargeSemibold: {
    fontFamily: AppFonts.semibold,
    fontSize: moderateScale(18),
  },
  bodyLargeSemibold2: {
    fontFamily: AppFonts.semibold,
    fontSize: moderateScale(16),
  },
  bodyLargeMedium: {
    fontFamily: AppFonts.medium,
    fontSize: moderateScale(16),
  },
  bodyLargeRegular: {
    fontFamily: AppFonts.regular,
    fontSize: moderateScale(16),
  },
  bodyMediumSemibold: {
    fontFamily: AppFonts.semibold,
    fontSize: moderateScale(14),
  },
  bodyMediumBold: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(14),
  },
  bodyMedium: {
    fontFamily: AppFonts.medium,
    fontSize: moderateScale(14),
  },
  bodyMediumRegular: {
    fontFamily: AppFonts.regular,
    fontSize: moderateScale(14),
  },
  bodyRegularSemibold: {
    fontFamily: AppFonts.semibold,
    fontSize: moderateScale(12),
  },
  bodyRegularBold: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(12),
  },
  bodyRegularMedium: {
    fontFamily: AppFonts.medium,
    fontSize: moderateScale(12),
  },
  bodyRegular: {
    fontFamily: AppFonts.regular,
    fontSize: moderateScale(12),
  },
  buttonBig: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(14),
  },
  buttonSmall: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(12),
  },
});

export type TextStyleTypes = keyof typeof TextStyle;
