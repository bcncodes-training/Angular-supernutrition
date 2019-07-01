import { Component, OnInit, Input } from '@angular/core';

import FOOD from '../food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  title: string = 'Search';
  busca: string = '';
  titleForm: string = 'Add New Food';
  newName: string = 'Name: ';
  newCalories: string = 'Calories: ';
  newImg: string = 'Path/Img: ';
  viewForm: boolean = false;
  nameFoodNew: string = '';
  todayTotalCalories: number = 0;

  @Input() childMyTodayFood: FOOD[];
  @Input() childMyFoods: FOOD[];

  addNewFood() {
    this.viewForm = true;
  }

  saveNewFood(nombre: any, calorias: any, imagen: any) {
    if(nombre.value !== '' && calorias.value > 0 && imagen.value !== '') {
      let myNewFood: FOOD;
      myNewFood = {name: nombre.value, calories: calorias.value, image: imagen.value, quantity: 0};
      this.childMyFoods.unshift(myNewFood);
      nombre.value = '';
      calorias.value = 0;
      imagen.value = '';
      this.nameFoodNew = '';
      this.viewForm = false;
    }
  }

  addTodayFood(evento: any) {
    let nombre = evento.target.parentNode.childNodes[1].firstChild.nodeValue;
    let calorias = evento.target.parentNode.childNodes[1].children[0].innerText;
    let myNewTodayFood: FOOD;
    myNewTodayFood = {name: nombre, calories: calorias, image: '', quantity: 0};
    this.childMyTodayFood.unshift(myNewTodayFood);
    this.todayTotalCalories += parseInt(calorias);
}

  constructor() { }

  ngOnInit() {
  }

}
