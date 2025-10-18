import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home'
import { Register } from '../screens/Register';

const Stack = createStackNavigator();

export function Navigation() {
  return ( 
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home} options={{ gestureEnabled: false }}></Stack.Screen>
        <Stack.Screen name='register' component={Register}></Stack.Screen>    
    </Stack.Navigator>
  );
}