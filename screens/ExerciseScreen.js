import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ExerciseScreen = () => {
    let message = "Hello World!";

   message = "TEST";

    return(
        <View>
            <Text style={styles.textStyle1}>{message}</Text>
            <Text style={styles.textStyle2}>{"Hello!"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        color: '#eb9719'
    },
    textStyle2: {
        color: '#ee1414'
    },
})

export default ExerciseScreen;