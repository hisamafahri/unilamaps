import { NavigationContainer } from '@react-navigation/native'
import React, { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/auth/Welcome';
import Login from './src/screens/auth/Login';

const Stack = createNativeStackNavigator();

export default function App(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
