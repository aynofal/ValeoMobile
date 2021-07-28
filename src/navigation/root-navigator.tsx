import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import CounterScreen from '../screens/counter';

type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
};
type RootStackRoutes = 'Home' | 'Counter' | undefined;
interface RootStackProps {
  initialRouteName?: RootStackRoutes;
}

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = ({initialRouteName = 'Home'}: RootStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Counter"
        component={CounterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
