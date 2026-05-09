import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
           <View style={styles.box1}></View>
           <View style={styles.box2}></View>
           <View style={styles.box3}></View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    viewStyle: {
    flex: 1,
    flexDirection: 'row',
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue',
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'steelblue',
    },
});

export default BoxScreen;