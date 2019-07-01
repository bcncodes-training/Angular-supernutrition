import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import localeEs from '@angular/common/locales/es';
// Custom Pipes
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { SmartTruncatePipe } from './pipes/smartTruncate/smart-truncate.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CapitalizePipe,
    SmartTruncatePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  HttpModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
