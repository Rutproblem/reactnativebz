import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const MenuScreen = (props) => {
    // console.log(props);
    return(
        <View>
            <Text style={styles.text}>Welcome to menu screen</Text>
            {/* <Button
                title="Go to List Screen"
                onPress={() => {props.navigation.navigate("List")}}
            ></Button> */}

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Students")}
                >
                <Text style={styles.touch}>Go To Students Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Profile")}
                >
                <Text style={styles.touch}>Profile Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Box")}
                >
                <Text style={styles.touch}>Box Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Posts")}
                >
                <Text style={styles.touch}>Posts Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Countries")}
                >
                <Text style={styles.touch}>Countries Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Product")}
                >
                <Text style={styles.touch}>Product Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    touch: {
        textAlign: "center",
        margin: 10,
        backgroundColor: 'darkblue',
        fontSize: 20,
        padding: 10,
        color: 'white'
    }
});


export default MenuScreen;