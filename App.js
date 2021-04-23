import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { navigationRef } from './src/Services/Navigation';
import StackNavigator from './src/Navigators/StackNavigator';
import codePush from 'react-native-code-push';
import { setNavigationColor } from './src/Services/AndroidNavBar';
import MomentLocale from './src/Services/momentLocale';

MomentLocale();
enableScreens();
const App = () => {
  setNavigationColor('#000000');
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor='transparent' translucent barStyle="light-content"/>
        <StackNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default codePush(App);
