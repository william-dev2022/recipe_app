import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import RecipeGridItem from './RecipeGridItem'
import { fetchRecipes } from '../api/recipe_service'
import { Recipe } from '../model/recipe'

interface Props {
    recipes : Array<Recipe>
}

export default function RecipeGrid({recipes} : Props) {

    // useEffect(() => {
    //     async () => {
    //         const test = await fetchRecipes(null);
    //         console.log(test)
    //     }
        
    // }, [])

    return (
        <View style={{ flex: 1, marginTop: 10 }}>
            <FlatList
                data={recipes}
                numColumns={2}
                style={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'space-evenly',
                    paddingVertical: 10,
                }}
                keyExtractor={(item, index) => (index + 100).toString()}
                //columnWrapperStyle={{ backgroundColor: 'red' }}
                renderItem={({ item, index }) => <RecipeGridItem recipe={item} onPress={() => null} />}
            />
        </View>
    )
}