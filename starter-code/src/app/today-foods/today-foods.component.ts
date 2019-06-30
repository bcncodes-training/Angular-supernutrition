import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { Food } from '../foods';
import { totalmem } from 'os';
@Component({
  selector: 'today-foods',
  templateUrl: './today-foods.component.html',
  styleUrls: ['./today-foods.component.css']
})
export class TodayFoodsComponent implements OnInit {
  foods=[];
  constructor() {
    this.foods=foods;
    }
  findSum(){
    var total=0;
    this.foods.forEach(e=>{
      total+=e.quantity*e.calories;
      console.log(total);
    });
    return total;
  }

  ngOnInit() {
  }
}
