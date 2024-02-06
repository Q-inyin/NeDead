import * as React from 'react';

import HomeScreen from "../pages/Tabbar/HomeScreen"
import ProfileScreen from "../pages/Tabbar/ProfileScreen"
import NotifcationScreen from "../pages/Tabbar/NotifcationScreen"
import SettingsScreen from "../pages/Tabbar/SettingsScreen"
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Bottomnavigator() {

  const tabScreenOptions = {
    common: {
      headerShown: true,
    },
    home: {
      tabBarLabel: "HomeScreen",
      title: "Home",
    },
    profile: {
      tabBarLabel: "Profile",
      title: "Profile",
    },
    notification: {
      tabBarLabel: "Notification",
      title: "Notification",
    },
    settings: {
      tabBarLabel: "Settings",
      title: "Settings",
    },
  };

  return (
    <Tab.Navigator
    screenOptions={(route)=>({
    headerShown:false,
    tabBarActiveTintColor:"#000", //icon color
    tabBarInactiveTintColor:"#c1c1c1", //options
    tabBarIcon:({color, size, focused}:any)=>{
      let iconName;
      if(route.route.name === "HomeScr"){
        iconName = focused ? "home" : "home-outline";
      }else if(route.route.name === "Profile"){
        iconName = focused ? "person" : "person-sharp"; // ios+iconsname
      }else if(route.route.name === "Notifcation"){
        iconName = focused ? "notifications" : "notifications-circle";
      }else if(route.route.name === "Settings"){
        iconName = focused ? "settings" : "settings-outline";
      }
      return <Icon name={iconName} size={22} color={color} />
    // eslint-disable-next-line comma-dangle
    }
    })}>
       <Tab.Screen name="HomeScr" component={HomeScreen} options={{ ...tabScreenOptions.common, ...tabScreenOptions.home }}/>{/* HomeScreen */}
       <Tab.Screen name="Profile" component={ProfileScreen} options={{ ...tabScreenOptions.common, ...tabScreenOptions.profile }}/>
       <Tab.Screen name="Notifcation" component={NotifcationScreen} options={{ ...tabScreenOptions.common, ...tabScreenOptions.notification }} />
       <Tab.Screen name="Settings" component={SettingsScreen} options={{ ...tabScreenOptions.common, ...tabScreenOptions.settings }} />
    </Tab.Navigator>
  );
}

 