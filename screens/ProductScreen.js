import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from '../data/product.json';
import Products from '../Products.js';

class ProductScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            product: []
        }
    }

        componentDidMount() {
            this.setState({
                product: data
            })
        }

    render() {
        return(
            <View>
                <Text style={StyleSheet.screenTitle}>Product Screen</Text>
                <FlatList data={this.state.product} keyExctrator={product => product.id} renderItem={({item}) => (<View style={StyleSheet.cardWrapper}><Text>Product name: {item.name}</Text> <Text>Product category: {item.category}</Text> <Text>Product price: {item.price}</Text><Text>Product stock: {item.stock}</Text><Text>Product image: {item.image}</Text><Text>Product description: {item.description}</Text></View>)}></FlatList>
            </View>
        )
    }
};

const style = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default ProductScreen;