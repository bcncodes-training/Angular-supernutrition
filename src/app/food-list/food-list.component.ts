import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';
import {Food} from '../foods';

@Component({
  selector: 'app-food-list-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  // @Input() list;
  foods = foods;
  // @Input() test: Food;
  // filter(){
  //   foods.filter(filter => this.foods="")
  // }
  constructor() { }

  ngOnInit() {
  }

}
