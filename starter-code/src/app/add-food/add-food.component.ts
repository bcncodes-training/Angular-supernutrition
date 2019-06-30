import { Component, Output, EventEmitter } from '@angular/core';
import foods from '../foods';
import { destroyView } from '@angular/core/src/view/view';

@Component({
  selector: 'add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {
  @Output() pleaseDeleteMeEvent = new EventEmitter();
  addProduct(name,calories){
   foods.splice(0,0,{name:name.value,calories:calories.value,image:'',quantity:0});
   this.pleaseDeleteMeEvent.emit();
  }
  
  constructor() { }



}
