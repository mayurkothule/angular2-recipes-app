import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from "app/recipes/recipe.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  recipes:Recipe[]=[];

  subscription:Subscription;

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription= this.recipeService.recipeChanged
      .subscribe(
        (recipes:Recipe[])=>{
          this.recipes=recipes;
        }
      )
      
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});

    //this.route is our cuurent route which we have to initilize in constructor and use to tell router about out current route info as relativeTo attribute
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  
}
