import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux'
import BottomScreens from '../Screens/BottomNavigator'
import AuthScreens from '../Screens/AuthScreens'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  const { colors } = useTheme()
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.auth.isLoggedIn,
  }))
  const renderIcon = (value, color, focused) => {
    let outlined = focused ? value:value
    return (
      <Icon name={outlined} size={23} color={color}/>
    )
  }

  return (
    <Tab.Navigator
      initialRouteName="Home" //73a3e6
      activeColor={colors.primary}
      inactiveColor={colors.accent}
      screenOptions={{
        backBehavior: 'initialRoute',
      }}
      barStyle={{
        backgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={BottomScreens.Home}
        options={{
          tabBarLabel: 'Bosh sahifa',
          tabBarIcon: ({focused, color}) => renderIcon('home', color, focused),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={BottomScreens.Notification}
        options={{
          tabBarLabel: 'Xabarlar',
          tabBarIcon: ({focused, color}) => renderIcon('notifications', color, focused),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="PostJob"
        component={BottomScreens.PostJob}
        options={{
          tabBarLabel: 'E\'lon berish',
          tabBarIcon: ({focused, color}) => renderIcon('duplicate', color, focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={isLoggedIn ? BottomScreens.Profile : AuthScreens.Router}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({focused, color}) => renderIcon('person', color, focused),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;