import React from "react";
import { View, Text, Flatlist, StyleSheet } from 'reach-native';

class CountriesScreen extends React.Component{
    render() {
        return(
            <View>
                <Text style={StyleSheet.screenTitle}>Countries Screen</Text>
            </View>
        )
    }
};

const style = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default CountriesScreen()