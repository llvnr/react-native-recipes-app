import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/actions'

export default function Ingredient({ ing }) {

    const dispatch = useDispatch()

    const onAddIngredient = () => {
        dispatch(addTask(`Ingrédient: ${ing.name}`))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{ing.name}</Text>
            <TouchableOpacity style={styles.btn} onPress={onAddIngredient}>
                <Text>Ajouter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7
    },
    name: {
        fontSize: 16
    },
    btn: {
        borderColor: "grey",
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        padding: 3
    }
})