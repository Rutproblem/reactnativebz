import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MainScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is main screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30
    }
});

export default MainScreen;

