import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpringPage } from './spring.page';

const routes: Routes = [
  {
    path: '',
    component: SpringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpringPageRoutingModule {}
