import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Main from './Main';
import SignUp from './SignUp';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />

        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
