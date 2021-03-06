/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Animated, ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import { context } from '../context/AppContext';
import { useContext } from 'react';
import PriceScreen from '../screens/PriceScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const cxtx = useContext(context);
  //TODO: Enter custom Button which enlarges Header and makes Searchbar visible
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor:cxtx?.color.blue}, headerTintColor:'#fff', headerTitleStyle:{fontWeight:'bold'}}}> 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Price" component={PriceScreen}/>
    </Stack.Navigator>
  );
}