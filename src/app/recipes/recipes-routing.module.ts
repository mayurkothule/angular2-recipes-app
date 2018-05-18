import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "app/auth/auth-guard.service";
import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";


const recipesRoutes: Routes = [
     { path:'',component:RecipesComponent,children:[
      { path:'',component:RecipeStartComponent },
      { path:'new',component:RecipeEditComponent, canActivate:[AuthGuard] },//static parameter routing should above dynamic path for same component
      { path:':id',component:RecipeDetailComponent },//this is dynamic 
      { path:':id/edit',component:RecipeEditComponent , canActivate:[AuthGuard]}
    ]}

];

@NgModule({
    imports:[
        RouterModule.forChild(recipesRoutes)
    ],
    exports:[RouterModule],
    providers:[AuthGuard]

})
export class RecipesRoutingModule{
    
}