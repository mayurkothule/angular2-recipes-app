import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature='recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDvM0f4-HsPU5mcTXy9UlHJin9R4rpEBFI",
      authDomain: "ng-recipe-book-a1c45.firebaseapp.com"
    })
  }

  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
