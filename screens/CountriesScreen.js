import React from "react";
import { View, Text, Flatlist, StyleSheet } from 'react-native';
import data from '../data/countries.json';

class CountriesScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            countries: []
        }
    }

        componentDidMount() {
            this.setState({
                countries: data
            })
        }

    render() {
        return(
            <View>
                <Text style={StyleSheet.screenTitle}>Countries Screen</Text>
                <FlatList
                data={this.state.countries}
                keyExctrator={countries => countries.id}
                renderItem={({item}) => (
                    <View style={StyleSheet.cardWrapper}>
                        <Text>City name: {item.name}</Text>
                        <Text>City name: {item.country}</Text>
                        <Text>City name: {item.description}</Text>
                    </View>)}>
                </FlatList>
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

export default CountriesScreen();