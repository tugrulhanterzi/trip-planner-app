import { Image, ImageSourcePropType, Platform } from 'react-native';
import { logger } from 'react-native-logs';

import moment from 'moment';

import loggerConfig from '_utils/logger.config';

const isNullOrEmpty = (text: any) => {
  if (text === null || text === undefined) {
    return true;
  }
  const textString = text?.toString();
  return !textString || textString?.toString()?.replace(/\s/g, '')?.length === 0;
};

const getAutomationTestingProp = (id?: string) => {
  if (id) {
    if (Platform.OS === 'ios') {
      return { testID: id };
    }
    return { accessibilityLabel: id };
  }
  return null;
};

const getActualImageSize = (source: ImageSourcePropType) => {
  const { width } = Image.resolveAssetSource(source) || {};
  const { height } = Image.resolveAssetSource(source) || {};
  const aspectRatio = width / height;
  return {
    width,
    height,
    aspectRatio,
  };
};

const convertDateToDiff = (date: Date) => {
  return moment(date).fromNow().toString();
};

const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const log = logger.createLogger(loggerConfig);

export {
  getAutomationTestingProp,
  isNullOrEmpty,
  getActualImageSize,
  convertDateToDiff,
  sleep,
  log,
};
