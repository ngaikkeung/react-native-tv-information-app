import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import SearchingScreen from "./screens/SearchScreen";


const Tab = createBottomTabNavigator();

const routes = [
    {
        name: "Home",
        id: "Home",
        icon: { ios: "ios-home", android: "home" },
        component: <HomeScreen />,
    },
    {
        name: "Favorite",
        id: "Favorite",
        icon: { ios: "ios-heart", android: "heart" },
        component: <FavoriteScreen />,
    },
    {
        name: "Search",
        id: "Search",
        icon: { ios: "ios-search", android: "search" },
        component: <SearchingScreen />,
    },
    {
        name: "Setting",
        id: "Setting",
        icon: { ios: "ios-settings", android: "settings" },
        component: <SettingScreen />,
    }
];

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = "ios-list";

                        for (const routeParam of routes) {
                            if (routeParam.name == route.name) {
                                iconName = focused ? routeParam.icon[Platform.OS === "ios" ? "ios" : "android"] :
                                    `${routeParam.icon[Platform.OS === "ios" ? "ios" : "android"]}-outline`;
                                break;
                            }
                        }
                        return <Ionicons name={iconName} color={color} size={size} />
                    }
                })}
            >

                {routes.map((route) => {
                    const EachScene = () => route.component;
                    return (
                        <Tab.Screen
                            name={route.name}
                            component={EachScene}
                            key={route.id}
                        />
                    );
                })}

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;