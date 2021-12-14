import React from "react";
import { View, Text, Button } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    ProgrameDetail: undefined | {
        programeId: string,
        programeName: string,
        imageUrl?: string
    };
};

type Props = StackScreenProps<RootStackParamList, "Search">;

const SearchContent = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Searching Screen</Text>
            <Button
                title="Go to detail page"
                onPress={() => navigation.navigate("ProgrameDetail")}
            ></Button>
        </View>
    );
}

export default SearchContent;