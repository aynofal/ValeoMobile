/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';
import HomeScreen from '../src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Mock Nav for Testing
const Stack = createStackNavigator();
// @ts-ignore
const MockedNavigator = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe('App testing', () => {
  it('Renders app correctly', async () => {
    jest.useFakeTimers();
    render(<App />);
  });
  it('Home page elements all exist', async () => {
    jest.useFakeTimers();
    const {getByTestId, getByText} = render(
      <MockedNavigator component={HomeScreen} />,
    );
    const HOME_TEXT = 'Welcome to Valeo Service test application';
    const button = getByTestId('HOME_NAV_BUTTON');
    const text = getByText(HOME_TEXT);
    expect(button).toBeTruthy();
    expect(text.props.children).toEqual(HOME_TEXT);
  });
});
