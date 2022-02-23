import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { ListFurnitureComponent } from './pages/list-furniture/list-furniture.component';
import { RegisterFornitureComponent } from './pages/register-forniture/register-forniture.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufactureRoutingModule { }
