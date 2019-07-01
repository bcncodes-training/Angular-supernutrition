import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/Filter.pipe';
import { FoodComponent } from './food/food.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FoodComponent]
})
export class AppModule { }
