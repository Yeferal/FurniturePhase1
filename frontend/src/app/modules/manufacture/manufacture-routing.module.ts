import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'pieces',
  //   component: PiecesComponent
  // },
  {
    // path: '**',//TODO 404 cuando no existe la ruta
    // redirectTo: '/3'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufactureRoutingModule { }
