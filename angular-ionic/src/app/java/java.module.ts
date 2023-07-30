import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaPageRoutingModule } from './java-routing.module';

import { JavaPage } from './java.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavaPageRoutingModule
  ],
  declarations: [JavaPage]
})
export class JavaPageModule {}
