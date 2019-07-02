import { Component, OnInit } from '@angular/core';
import foods from '../../shared/data/foods';
import { Food } from '../../shared/models/food.model';
import { clearProviderOverrides } from '@angular/core/src/view';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  //foodList: Array<any> = foods;
  foodList: Array<any>;
  searchFood: string;
  showForm: boolean = false;
  showTodayList: boolean = false;
  foodTodayList: Array<Food> = [];
  totalCalories: number = 0;

  newFood = {
    name: '',
    calories: '',
    image: '',
    quantity: ''
  };

  onClickShowForm(): void {
    this.showForm = !this.showForm;
  }

  addNewFood() : void {
    this.foodList.push(this.newFood);

    this.showForm = false;
  }

  addTodayList(item: Food): void {
    this.showTodayList = true;
    this.foodTodayList.push(item);
    this.totalCalories += item.calories * item.quantity;
  }

  constructor() {
    this.foodList = foods;
    this.searchFood = '';
    this.newFood = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
    };
  }

  ngOnInit() {
  }

}
