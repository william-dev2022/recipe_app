import axios from "axios"
import { Recipe } from "../model/recipe";

const options: any = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6c85aa71cbmsh08b2d32c3f4a749p192175jsn1fa2dbed327a',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
}

enum ApiUrls {
    
}

export const fetchRecipes =  (searchText: string |null): Promise<Recipe[]> => {
    const params = {
        from: '0', size: '20',
        tags: searchText ? 'under_30_minutes' : 'licensed_video',
        q: searchText ?? ''
    }
    return fetch(`https://tasty.p.rapidapi.com/recipes/list?from=${params.from}&size=${params.size}&tags=${params.tags}&q=${params.q}`, options)
    .then(response => response.json()).then(response => response.results as Recipe[]);
    //response.results as Recipe[]
}