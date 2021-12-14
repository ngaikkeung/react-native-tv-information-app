import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchContent from "../scene/SearchContentScene";
import ProgrameDetail from "../scene/ProgrameDetailScene";

const Stack = createStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchContent} />
            <Stack.Screen name="ProgrameDetail" component={ProgrameDetail} />
        </Stack.Navigator>
    )
}

export default SearchStack;