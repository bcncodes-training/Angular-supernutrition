import { Component, Input } from '@angular/core';
import { Food } from '../foods';

@Component({
  selector: 'food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent {
  @Input() food: Food;


}
