import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
      }
      {
        path: '',
        children:[
          
        ]
      }

    ]
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}