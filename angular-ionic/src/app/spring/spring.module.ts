import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpringPageRoutingModule } from './spring-routing.module';

import { SpringPage } from './spring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpringPageRoutingModule
  ],
  declarations: [SpringPage]
})
export class SpringPageModule implements OnInit{
  ngOnInit(): void {
    console.log("시작띠1");
  }
}
