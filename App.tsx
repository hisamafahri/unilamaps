import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './src/screens/main/Explore';
import { COLORS } from './src/constant/Color';
import Home from './src/screens/main/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from './src/component/navigation/BottomBar';
import Weather from './src/screens/main/Weather';
import More from './src/screens/main/More';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.mainBackground
  },
};

export default function App(navigation: any): ReactElement {
  return (
    <NavigationContainer theme={MyTheme}>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator> */}
      <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
        <Tab.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
        <Tab.Screen name="More" component={More} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
