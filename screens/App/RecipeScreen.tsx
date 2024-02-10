import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Search from '../../components/Search'
import RecipeGrid from '../../components/RecipeGrid';
import { fetchRecipes } from '../../api/recipe_service';
import { Recipe } from '../../model/recipe';

export default function RecipeScreen() {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setLoading] = useState(true)


    const handleSearchRequest = () => "Hello World";

    useEffect(() => {
        console.log('testing')
        fetchRecipes('').then(recipes => {
            setRecipes(prevRecipes => recipes)
        } )  
        console.log('testing ')
    }, [])

    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight, paddingHorizontal: 15, backgroundColor: '#eee' }}>
            <Header />
            <Search handleSearchRequest={handleSearchRequest} />

            <RecipeGrid recipes={recipes} />
        </View>
    )
}