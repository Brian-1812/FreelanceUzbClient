import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTheme } from 'react-native-paper'
import BottomNavigator from './BottomNavigator'
import HeaderRight from '../Components/Header/MainHeaderRight'
import ProfileScreens from '../Screens/ProfileScreens/index'
import StackScreens from '../Screens/StackNavigator/index'
import AuthScreen from '../Screens/AuthScreens'

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const { colors } = useTheme()
  
  return (
    <>
      <Stack.Navigator
        initialRouteName="BottomNavigator"
        screenOptions={{
          headerBackTitleVisible: false,
          headerShown: true,
          headerTitle: null,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{
            headerRight: HeaderRight,
            // headerLeft
          }}
        />
        <Stack.Screen
          name="JobDetails"
          component={StackScreens.JobDetails}
        />
        <Stack.Screen
          name="ShareJob"
          component={StackScreens.ShareJob}
        />
        <Stack.Screen
          name="SearchCandidate"
          component={StackScreens.SearchCandidate}
        />
        <Stack.Screen
          name="MyJobs"
          component={ProfileScreens.MyJobs}
        />
        <Stack.Screen
          name="PersonalData"
          component={ProfileScreens.PersonalData}
        />
        <Stack.Screen
          name="Resume"
          component={ProfileScreens.Resume}
        />
        <Stack.Screen
          name="Settings"
          component={ProfileScreens.Settings}
        />
        <Stack.Screen
          name="SavedJobs"
          component={ProfileScreens.SavedJobs}
        />
        <Stack.Screen
          name="Login"
          component={AuthScreen.Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={AuthScreen.Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
export default StackNavigator;
