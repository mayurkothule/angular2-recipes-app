import { Recipe } from "app/recipes/recipe.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
    recipeChanged=new Subject<Recipe[]>();

    private recipes:Recipe[]=[
    new Recipe(
        'The test recipe',
        'This is simple test recipe',
        'https://img.rasset.ie/000baebf-800.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]
    ),
    new Recipe(
        'Another recipe',
        'This is meat recipe',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqonpi_gkHm9EqPIBu9PD8ThT68Mz0r3sfPVnRHWevGIJEmQ9_-g',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1),
        ]
    ),
      new Recipe(
        'Another recipe',
        'This is meat recipe',
        'http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1),
        ]
    )
  ];

  constructor(private slService:ShoppingListService){

  }

  setRecipes(recipes:Recipe[]){
      this.recipes=recipes;
      this.recipeChanged.next(this.recipes.slice());

  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  getRecipes(){
      return this.recipes.slice();//only return copy
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
      this.recipes[index]=newRecipe;
      this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipeChanged.next(this.recipes.slice());
  }

}
