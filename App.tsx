/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from './src/utils/global-styles';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/root-navigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.darker : COLORS.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
