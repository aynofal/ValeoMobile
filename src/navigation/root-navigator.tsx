import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import CounterScreen from '../screens/counter';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Counter: {toAdd?: string};
};
type RootStackRoutes = 'Home' | 'Counter' | undefined;

interface RootStackProps {
  initialRouteName?: RootStackRoutes;
}

export type CounterScreenRouteProp = RouteProp<RootStackParamList, 'Counter'>;

export type CounterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Counter'
>;

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = ({initialRouteName = 'Home'}: RootStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
    </Stack.Navigator>
  );
};
