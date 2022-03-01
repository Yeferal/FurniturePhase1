import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationFurniturePlansComponent } from './pages/creation-furniture-plans/creation-furniture-plans.component';

const routes: Routes = [
  {
    path: 'creation-furniture-plans',
    component: CreationFurniturePlansComponent
  },
  // {
  //   // path: '**',//TODO 404 cuando no existe la ruta
  //   // redirectTo: '/3'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
