import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const cities = [
    {name: 'Tetovo', country: 'North Macedonia', continent: 'Europe'},
    {name: 'Cairo', country: 'Egypt', continent: 'Africa'},
    {name: 'New York', country: 'USA', continent: 'North America'},
    {name: 'Tokyo', country: 'Japan', continent: 'Asia'},
    {name: 'Brasil', country: 'Brazil', continent: 'South America'},
    {name: 'Sydney', country: 'Australia', continent: 'Oceania'},
]

const ChallengeScreen = () => {
    return (
        <View>
            <Text style={styles.infoStyle}>List of cities:</Text>
            <FlatList 
                data={cities}
                renderItem={({item}) => {
                    return <Text style={styles.infoStyle}>{item.name}, {item.country} - {item.continent}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    infoStyle: {
        borderWidth: 2,
        borderColor: "black",
        // color: "white"
    },
})

export default ChallengeScreen;