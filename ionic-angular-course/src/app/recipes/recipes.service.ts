import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 1,
            title: 'Schnitzel',
            imageUrl: 'https://2.bp.blogspot.com/-tWf3R13K_Io/W8d2BQABBGI/AAAAAAAAMeU/FM4Y0SEf2rEzpZWHs_fbOJrQtrylcL25gCLcBGAs/s1600/SCHNITZEL%2B3.jpg',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 2,
            title: 'Spaghetti',
            imageUrl: 'https://www.casaredo.com/blog/wp-content/uploads/2021/01/receita-espaguete-tradicional-perfeito.jpg',
            ingredients: ['Spaghetti package', 'Onion', 'Tomato paste']
        },
        {
            id: 3,
            title: 'Lasagna',
            imageUrl: 'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg',
            ingredients: ['Lean Ham', 'Pasta for Lasagna', 'Milk', 'Butter']
        }
    ];

    constructor() { }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(id: number) {
        return {...this.recipes.find(r => r.id === id)};
        // O mesmo que escrever:
        // return {...this.recipes.find(recipe => {
        //     return recipe.id === id;
        //     })
        // };
    }

    deleteRecipe(id: number){
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    }
}
