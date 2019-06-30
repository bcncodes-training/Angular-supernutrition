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

  foodList: Array<any> = foods;
  searchFood: string
  showForm: boolean = false;
  showTodayList: boolean = false;
  foodTodayList: Array<Food> = [];

  newFood = {
    name: '',
    calories: '',
    image: ''
  };

  onClickShowForm(): void {
    this.showForm = !this.showForm;
  }
/*
  addNewFood(event: any, formNewFood: any) : void {

    event.preventDefault();

    this.foodList.push({
      name: formNewFood[0].value,
      calories: formNewFood[1].value,
      image: formNewFood[2].value
    })

  }
*/

  addNewFood() : void {

    this.foodList.push(this.newFood);

    this.newFood = {
      name: '',
      calories: '',
      image: ''
    }

    this.showForm = false;

  }

  addTodayList(foodItem: any) : void {

    this.showTodayList = true;

    this.foodTodayList.push(foodItem);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
