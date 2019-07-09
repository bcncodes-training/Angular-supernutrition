import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchFood"
})
export class SearchFoodPipe implements PipeTransform {
  transform(foodslist: any[], food_name: string): any[] {
    let searchResult = [];
    for (let food of foodslist) {
      if (food.name.toLowerCase().includes(food_name.toLowerCase())) searchResult.push(food);
    }
    return searchResult;
  }
}
