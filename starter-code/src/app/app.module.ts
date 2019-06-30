import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterFoodPipe } from './pipes/filter-food.pipe';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { TodayFoodsComponent } from './today-foods/today-foods.component';
import { FilterTodayPipe } from './pipes/filter-today.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterFoodPipe,
    FoodDetailComponent,
    AddFoodComponent,
    TodayFoodsComponent,
    FilterTodayPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FoodDetailComponent, AddFoodComponent, TodayFoodsComponent]
})
export class AppModule { }
