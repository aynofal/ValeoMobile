import React, {FC} from 'react';
import {
  Pressable,
  Text,
  PressableProps,
  useColorScheme,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS, SPACING} from '../utils/global-styles';

interface ButtonProps extends PressableProps {
  style?: ViewStyle;
  buttonText: string;
  textStyle?: TextStyle;
}

const Button: FC<ButtonProps> = buttonProps => {
  // Dark Mode Consumer
  const isDark = useColorScheme() === 'dark';
  // Prop Destructuring
  const {
    buttonText,
    textStyle,
    style: customStyle,
    ...pressableProps
  } = buttonProps;
  // Dynamic Styles
  const backgroundStyle: ViewStyle = {
    backgroundColor: isDark ? COLORS.lighter : COLORS.darker,
  };
  const buttonTextStyle: TextStyle = {
    color: isDark ? COLORS.darker : COLORS.lighter,
  };

  return (
    <Pressable
      {...pressableProps}
      style={[customStyle, styles.button, backgroundStyle]}>
      <Text style={[textStyle, styles.buttonTxt, buttonTextStyle]}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: SPACING[2],
    borderRadius: SPACING[0],
  } as ViewStyle,
  buttonTxt: {
    fontWeight: '700',
    fontSize: 16,
  } as TextStyle,
});

export default Button;
