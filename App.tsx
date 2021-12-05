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
import Location from './src/screens/navigation/Location';
import About from './src/screens/more/About';
import TermsAndConditions from './src/screens/more/TermsAndConditions';
import PrivacyPolicy from './src/screens/more/PrivacyPolicy';

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
      <Stack.Navigator>
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }} />
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
        
        {/* More */}
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: true, title: 'Kebijakan Privasi' }} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{ headerShown: true, title: 'Syarat & Ketentuan' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


function TabNav() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
      <Tab.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
      <Tab.Screen name="More" component={More} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}