import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import { COLORS } from './src/constant/Color';
import Home from './src/screens/auth/Home';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.mainBackground
  },
};

export default function App(): ReactElement {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
