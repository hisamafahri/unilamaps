import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { ReactElement, useEffect } from 'react'
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
import Contact from './src/screens/more/Contact';
import Faq from './src/screens/more/Faq';
import Donation from './src/screens/more/Donation';
import WebViewPage from './src/screens/utils/WebViewPage';
import Developer from './src/screens/more/Developer';
import SplashScreen from 'react-native-splash-screen'
import Faculty from './src/screens/navigation/Faculty';
import Search from './src/screens/navigation/Search';
import Maps from './src/screens/utils/Maps';
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({ skipPermissionRequests: false, authorizationLevel: 'always' });
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
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }} />
        <Stack.Screen name="WebViewPage" component={WebViewPage} options={{ headerShown: true }} />
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
        <Stack.Screen name="Faculty" component={Faculty} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />

        {/* More */}
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
        <Stack.Screen name="Faq" component={Faq} options={{ headerShown: false }} />
        <Stack.Screen name="Donation" component={Donation} options={{ headerShown: false }} />
        <Stack.Screen name="Developer" component={Developer} options={{ headerShown: false }} />
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