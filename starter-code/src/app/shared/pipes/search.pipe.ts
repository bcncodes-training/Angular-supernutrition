import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food.model'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(foods: [Food], searchFood: string): any  {

      if (!foods || !searchFood) {
        return foods;
      }

      return foods.filter(foods => foods.name.toLowerCase().indexOf(searchFood) !== -1);

  }
}
