import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foods = [];
  search: string;
  newFood: {
    name: string,
    calories: number,
    image: string,
    quantity: number
  };
  newPanelIsVisible: boolean;
  totalCalories: number;

  constructor() {
    this.foods = foods;
    this.search = '';
    this.newFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    };
    this.newPanelIsVisible = false;
    this.totalCalories = this.getTotalCalories();
   }

   addFood(f) {
    // Guardar una copia de los valores en una variable
    const food = {
      name: f.name,
      calories: f.calories,
      image: f.image,
      quantity: 1
    };
    // añadir alimento
    this.foods.push(food);
    // Reiniciar valores del formulario
    this.newFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    };
    // Actualizar calorías
    this.totalCalories = this.getTotalCalories();
    // Salir del formulario
    this.toggleNewPanelVisibility();
   }

   getTotalCalories() {
    let totalCals = 0;
    for (let i = 0, numFoods = this.foods.length; i < numFoods; i++) {
      let f = this.foods[i];
      totalCals += f.calories * f.quantity;
    }
    return totalCals;
   }

  toggleNewPanelVisibility() {
    this.newPanelIsVisible = !this.newPanelIsVisible;
  }



  ngOnInit() {
  }

}
