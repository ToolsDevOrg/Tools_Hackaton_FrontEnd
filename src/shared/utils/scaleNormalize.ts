import { PixelRatio, Platform } from 'react-native';

export const scaleNormalize = (size: number) => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(size)) * 0.99;
  }
};
