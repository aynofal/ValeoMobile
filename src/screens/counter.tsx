import React, {FC} from 'react';
import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, CONTAINER, SPACING, TEXT_PRESETS} from '../utils/global-styles';
import Icon from '../components/icon';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/button';

const CounterScreen: FC = () => {
  const isDark = useColorScheme() === 'dark';
  const {heading} = TEXT_PRESETS(isDark);
  const mainColor: string = isDark ? COLORS.light : COLORS.dark;
  const navigation = useNavigation();
  const {goBack} = navigation;

  return (
    <View style={[CONTAINER(isDark), styles.container]}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => goBack()}>
        <Icon icon={'BACK_ICON'} color={mainColor} size={SPACING[4]} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={[heading, styles.headingText]}>Counter Value</Text>
        <Text style={[styles.counterText, {color: mainColor}]}>0</Text>
        <Button buttonText={'Open QR Scanner'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING[3],
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    textAlign: 'center',
    marginBottom: SPACING[1],
  },
  counterText: {
    fontSize: SPACING[5],
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: SPACING[3],
  },
  backButtonContainer: {
    width: SPACING[4],
  },
});

export default CounterScreen;
