import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileInfo from "../dummy/react-sat/components/ProfileInfo";
import Project from "../dummy/react-sat/components/Project";

const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
            <ProfileInfo
                fullName="John Doe"
                jobPosition="Full-Stack Developer"
                desc="I`m passionate about creating Web and Mobile Applications"
                image={require('../assets/profile.jpg')}
            ></ProfileInfo>

            <View style={styles.heading}>
                <Text style={styles.text}>PROJECTS</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View All</Text>
                </TouchableOpacity>
            </View>

            <Project 
                firstImg={require('../assets/project1.webp')}
                secondImg={require('../assets/project2.jpg')}
            ></Project>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center',
        marginVertical: 15
    },
    screen: {
        backgroundColor: 'white'
    },

    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    btn: {
        backgroundColor: '#ffd700',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    btnText: {
        fontWeight: 'bold',
        color: 'white'
    }
})


export default ProfileScreen;