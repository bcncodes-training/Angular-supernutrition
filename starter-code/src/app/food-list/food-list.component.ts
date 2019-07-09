import { Component, OnInit } from "@angular/core";
import foods from "../foods";
import { SearchFoodPipe } from "../pipes/search-food.pipe";
import { CheckImageUrlPipe } from "../pipes/check-image-url.pipe";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"],
  providers: [SearchFoodPipe, CheckImageUrlPipe]
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  searchFoodList: Object[] = [];
  form_Visible = false;
  showFormButton_active = false;
  menuList: Food[];
  totalAmountCalories = 0;

  constructor(
    private searchFoods: SearchFoodPipe,
    private checkUrl: CheckImageUrlPipe
  ) {
    this.foodList = foods;
    this.menuList = [];
    console.log(this.foodList);
  }

  ngOnInit() {}

  searchFood(food: string) {
    console.log(food);
    this.searchFoodList = this.searchFoods.transform(this.foodList, food);
  }

  addNewFood(form: any) {
    //console.log(form);

    let newFood = {
      name: form.value.name,
      calories: form.value.calories,
      image: form.value.imageUrl,
      quantity: 0
    };

    this.foodList.push(newFood);
    //console.log("Fomulario posteado...");
    // setTimeout(() => {
    //   this.showForm();
    // }, 3000);
    this.showForm();
  }

  showForm() {
    this.form_Visible = !this.form_Visible;
    this.showFormButton_active = !this.showFormButton_active;
  }

  addMenuFood(food: Food, foodUnits: number) {
    console.log("food : " + food);
    console.log("units : " + foodUnits);
    food.quantity = foodUnits;
    if (this.menuList.filter((e: Food) => e.name === food.name).length <= 0) {
      this.menuList.push(food);
    }
    this.updateCaloriesAmount();
  }

  updateCaloriesAmount() {
    if (this.menuList.length <= 0) {
      this.totalAmountCalories = 0;
    } else {
      this.totalAmountCalories = 0;
      for (let food of this.menuList) {
        this.totalAmountCalories += food.quantity * food.calories;
      }
    }
  }
}

interface Food {
  name: string;
  calories: number;
  image: string;
  quantity: number;
}
