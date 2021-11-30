import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/auth/Welcome';
import Login from './src/screens/auth/Login';
import { COLORS } from './src/constant/Color';

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
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
