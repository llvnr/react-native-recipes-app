import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function RecipeTile({ item, navigation }) {
    return (
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('RecipesDetails', {
                id: item.id
            })
        }}
        style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.subContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomColor: "gray",
        borderWidth: 1,
    },  
    image: {
        width: "30%",
        height: 70
    },
    subContainer: {
        width: "70%",
        padding: 7
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    }
})