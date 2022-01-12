import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecipesList from '../screens/RecipesList';
import RecipesDetails from '../screens/RecipesDetails';

const Stack = createNativeStackNavigator()

export const RecipesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RecipesList" component={RecipesList} />
            <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
        </Stack.Navigator>
    )
}