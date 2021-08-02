/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useMemo} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from './src/utils/global-styles';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/root-navigator';

// Navigation Configuration: deeplinks
const config = {
  screens: {
    Home: 'home',
    Counter: 'counter/:toAdd',
  },
};
const linking = {
  prefixes: ['valeo-mobile://'],
  config,
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = useMemo(
    () => ({
      backgroundColor: isDarkMode ? COLORS.dark : COLORS.light,
      flex: 1,
    }),
    [isDarkMode],
  );

  return (
    <NavigationContainer linking={linking}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
