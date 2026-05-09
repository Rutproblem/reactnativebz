import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import StudentDetails from "../dummy/react-sat/components/StudentDetails";

const StudentScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails 
                name="Erlis" 
                image={require("../assets/android-icon-foreground.png")}
                description="E ka mare vendin e pare dhe te tret"
            >
            </StudentDetails>
            <StudentDetails 
                name="Bora" 
                image={require("../assets/android-icon-foreground.png")}
                description="E ka mare vendin e 10"
            >
            </StudentDetails>

            <StudentDetails 
                name="Arb" 
                image={require("../assets/android-icon-foreground.png")}
                description="E ka mare vendin e pare heren e pare"
            >
            </StudentDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})


export default StudentScreen;