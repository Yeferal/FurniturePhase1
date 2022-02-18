import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WhitePageComponent } from './pages/white-page/white-page.component';
import { TemplateHomeComponent } from './pages/template-home/template-home.component';

const routes: Routes = [
  {
    path: '1',
    component: WhitePageComponent
  },
  // {
  //   path: '2',
  //   component: TemplateHomeComponent
  // },
  // // {
  // //   path: 'favorites',
  // //   loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  // // },
  // {
  //   // path: '**',//TODO 404 cuando no existe la ruta
  //   // redirectTo: '/1'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhiteRoutingModule { }
