import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

const Products = (props) => {
    return(
        <View>
            <Image>
                source={{url: props.img}}
                style={styles.img}
                resizeMode="contain"
            </Image>
            <View>
                <Text>{props.name}</Text>
                <Text>{props.description}</Text>
                <View>
                    <Text>{props.price}</Text>
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
        borderWidth: 2,
        borderColor: "#1a9371",
        paddingHorizontal: 10,
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default Products;