import React from "react";
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import data from '../data/product.json';
import Products from '../Products';

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
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.title}>Product Screen</Text>
                <ScrollView>
                    <FlatList
                        data={this.state.product}
                        showsVerticalScrollIndicator={true}
                        keyExctrator={product => product.id}
                        renderItem={({item}) => (
                            <View style={StyleSheet.cardItem}>
                                <Products
                                    name={item.name}
                                    category={item.category}
                                    price={item.price}
                                    stock={item.stock}
                                    image={item.image}
                                    description={item.description}
                                ></Products>
                            </View>)}>
                    </FlatList>
                </ScrollView>
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