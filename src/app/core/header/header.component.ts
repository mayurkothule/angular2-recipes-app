import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from "app/auth/auth.service";
import { DataStorageService } from "app/shared/data-storage.service";


@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{

  constructor(private dataStorageService:DataStorageService,
              private authService:AuthService ){

  }

  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response:Response)=>{
          console.log('response',response);
        }
      )
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }
  
}
