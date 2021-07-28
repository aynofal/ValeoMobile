import React, {FC} from 'react';
import {View, Text, useColorScheme, StyleSheet} from 'react-native';
import {CONTAINER, SPACING, TEXT_PRESETS} from '../utils/global-styles';
import Button from '../components/button';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: FC = () => {
  const isDark = useColorScheme() === 'dark';
  const {heading} = TEXT_PRESETS(isDark);
  const navigation = useNavigation();

  return (
    <View style={[CONTAINER(isDark), styles.container]}>
      <Text style={[heading, styles.headingText]}>
        Welcome to Valeo Service test application
      </Text>
      <Button
        buttonText={'Proceed to Counter Screen'}
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING[3],
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    textAlign: 'center',
    marginBottom: SPACING[3],
  },
});

export default HomeScreen;
