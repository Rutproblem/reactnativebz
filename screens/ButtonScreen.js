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

            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ButtonScreen;