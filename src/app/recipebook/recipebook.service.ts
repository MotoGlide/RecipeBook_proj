import { Injectable } from '@angular/core';

import { Recipe } from './recipebook.model';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shoplist/shopping-list.service'

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 'What else do you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
            new Ingredient('Pickle', 2),
            new Ingredient('Ketchup', 1),
            new Ingredient('Mustard', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}