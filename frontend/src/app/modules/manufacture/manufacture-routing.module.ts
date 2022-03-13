import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { ListFurnitureComponent } from './components/list-furniture/list-furniture.component';
import { RegisterFornitureComponent } from './pages/register-forniture/register-forniture.component';
import { PageListPiecesComponent } from './pages/page-list-pieces/page-list-pieces.component';
import { CreateCategoryPieceComponent } from './components/create-category-piece/create-category-piece.component';

const routes: Routes = [
  {
    path: 'list-categories',
    component: ListCategoryComponent
  },
  {
    path: 'list-furniture',
    component: ListFurnitureComponent
  },
  {
    path: 'register-forniture',
    component: RegisterFornitureComponent
  },{
    path: 'list-pieces',
    component: PageListPiecesComponent
  },
  {
    path: 'register-category',
    component: CreateCategoryPieceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufactureRoutingModule { }
