import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const COLORS = Colors;

export const SPACING = [6, 12, 18, 24, 30, 36, 42];

export const TEXT_PRESETS = (isDark: boolean = false) =>
  StyleSheet.create({
    heading: {
      color: isDark ? COLORS.lighter : COLORS.darker,
      fontWeight: 'bold',
      fontSize: 24,
    } as TextStyle,
  });

export const CONTAINER = (isDark: boolean = false) =>
  ({
    flex: 1,
    backgroundColor: isDark ? COLORS.darker : COLORS.lighter,
  } as ViewStyle);
