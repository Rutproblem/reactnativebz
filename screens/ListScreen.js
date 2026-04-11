import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const students = [
    {name: 'Bledar', lastname: 'Abdili', age: '15'},
    {name: 'Naron', lastname: 'Emurllai', age: '15'},
    {name: 'Viola', lastname: 'Ismaili', age: '14'},
    {name: 'Butrint', lastname: 'Zeqiri', age: '15'}
]

const ListScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>List of students:</Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            keyExtractor={student => student.name}
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