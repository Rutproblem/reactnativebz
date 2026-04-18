import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

let clickCount = 1;

const ButtonScreen = () => {
    return(
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button 
            title="Click me"
            color="purple"
            onPress={() => console.log("Button clicked!", clickCount++)}
            ></Button>

            <TouchableOpacity
            onPress={() => console.log("Touchable element clicked!", clickCount++)}
            >
                <Text style={styles.touch}>Click Touchable Element</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        margin: 10,
        fontSize: 35
    },
    touch: {
        textAlign: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        fontSize: 20,
        backgroundColor: 'purple'
    }
});

export default ButtonScreen;