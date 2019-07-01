import { Component } from '@angular/core';
import FOOD from './food';
import foods from './foods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperNutrition';
  public myFoods: FOOD[] = foods;
  public myTodayFood: FOOD[] = [];

  constructor() {}
}
