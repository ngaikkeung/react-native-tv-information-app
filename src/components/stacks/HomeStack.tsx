import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProgrameDetail from "../scene/ProgrameDetailScene";
import HomeScreen from "../screens/HomeScreen";
import { Route } from "react-native";

interface passingProps {
    route: Route
}

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProgrameDetail" component={ProgrameDetail} />
        </Stack.Navigator>
    )
}

export default HomeStack;