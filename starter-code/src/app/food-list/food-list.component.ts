import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { Food } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods=[];
  pattern:string;
  selectedFood:Food;
  isOn=false;
  constructor() {
    this.foods=foods;
  }
  onSelect(food: Food): void {
    this.selectedFood = food;
  }
  addQty(food:Food):void{
    food.quantity++;
  }
  changeQty(event,food:Food):void{
    food.quantity=event.target.value;
  }
  private deleteHandler(): void {
    this.isOn = false;
  }
  ngOnInit() {
  }

}

