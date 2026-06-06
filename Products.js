import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";

const Products = (props) => {
    return(
        <View style={styles.cardContainer}>
            <Image
                source={{url: props.img}}
                style={styles.img}
                resizeMode="contain"
            />
            <View>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.desc}>{props.description}</Text>
                <View>
                    <Text style={styles.price}>{props.price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10
    },
    img: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    name: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center'
    },
    desc: {
        textAlign: 'center'
    },
    price: {
        borderWidth: 52,
        borderColor: "#1a9371",
        paddingHorizontal: 10,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Products;