import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
      },
      {
        path: '',
        children: [
          {
            path: 'app',
            children: [
              {
                path: 'spring',
                loadChildren: () => import('../spring/spring.module').then(m => m.SpringPageModule)
              },
              {
                path: 'java',
                loadChildren: () => import('../java/java.module').then(m => m.JavaPageModule)
              }
            ]
          },
   
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
