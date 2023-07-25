import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
