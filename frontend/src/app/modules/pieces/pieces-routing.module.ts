import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiecesComponent } from './pages/pieces/pieces.component';

const routes: Routes = [
  {
    path: '3',
    component: PiecesComponent
  },
  {
    // path: '**',//TODO 404 cuando no existe la ruta
    // redirectTo: '/3'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PiecesRoutingModule { }
