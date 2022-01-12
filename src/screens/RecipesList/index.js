import React, {useEffect, useState} from 'react'
import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes'
import { getRecipesList } from '../../redux/selectors'
import RecipeTile from './RecipeTile'

export default function RecipesList({ navigation }) {

    const [page, setPage] = useState(0)

    const { getAllRecipes } = useFetchRecipes()

    const allRecipes = useSelector(getRecipesList)
    console.log('ALL RECIPES', allRecipes);


    useEffect(() => {
        getAllRecipes(page)
    }, [page])

    const renderItem = ({item}) => <RecipeTile navigation={navigation} item={item} />

    const onEndReached = () => {
        // charger une nouvelle page - 30 nouvelles recettes
        setPage(currPage => currPage + 1)
    }

    return (
        <FlatList 
            data={allRecipes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{flexGrow: 1}}
            onEndReached={onEndReached}
            ListFooterComponent={() => <View style={{padding: 40}}><ActivityIndicator /></View>}
        />
    )
}
