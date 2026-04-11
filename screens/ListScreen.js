import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const students = [
    {name: 'Bledar', lastname: 'Abdili', age: '15'},
    {name: 'Naron', lastname: 'Emurllai', age: '15'},
    {name: 'Viola', lastname: 'Ismaili', age: '14'},
]

const ListScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>List of students:</Text>
            <FlatList 
                data={students}
                renderItem={({item}) => {
                    return <Text>{item.name} {item.lastname} - {item.age}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "blue"
    }
})

export default ListScreen;