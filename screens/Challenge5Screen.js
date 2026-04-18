// trego student info, me list, text, style, first name, surname, birthday, phone number, text, view,
// let & const dhe hobit
import React from "react"
import { FlatList, Text, View, StyleSheet } from "react-native"

const students = [
    {firstname: 'Flori', surname: 'Sulejmani', birthday: '05.07.2003', phonenumber: '071123456', hobby: 'Football'},
    {firstname: 'Muhammed', surname: 'Rexhepi', birthday: '04.03.2003', phonenumber: '072123456', hobby: 'Volleyball'},
    {firstname: 'Eda', surname: 'Beqiri', birthday: '03.11.2003', phonenumber: '072123456', hobby: 'Basketball'},
    {firstname: 'Fiona', surname: 'Zeqiri', birthday: '05.02.2003', phonenumber: '072234567', hobby: 'Swimming'}
]

const Challenge5Screen = () => {
    return (
        <View>
            <Text style={styles.headerStyle}>List of students:</Text>
            <FlatList
                data={students}
                renderItem={({item}) => {
                    return<Text style={styles.textStyle}>Name: {item.firstname} {item.surname}, birthday: {item.birthday}, phonenumber: {item.phonenumber}, hobby: {item.hobby}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        padding: 10,
        marginBottom: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: '15px',
        backgroundColor: 'lightgray',
    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: '10px',
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 3,
        marginLeft: '150px',
        marginRight: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default Challenge5Screen;