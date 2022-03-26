import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { ListFurnitureComponent } from './components/list-furniture/list-furniture.component';
import { RegisterFornitureComponent } from './pages/register-forniture/register-forniture.component';
import { PageListPiecesComponent } from './pages/page-list-pieces/page-list-pieces.component';
import { CreateCategoryPieceComponent } from './components/create-category-piece/create-category-piece.component';
import { JwtLogoutGuard } from 'src/app/core/guards/jwt-logout.guard';

const routes: Routes = [
  {
    path: 'list-categories',
    component: ListCategoryComponent,
    canActivate: [JwtLogoutGuard]
  },
  {
    path: 'list-furniture',
    component: ListFurnitureComponent,
    canActivate: [JwtLogoutGuard]
  },
  {
    path: 'register-forniture',
    component: RegisterFornitureComponent,
    canActivate: [JwtLogoutGuard]
  },{
    path: 'list-pieces',
    component: PageListPiecesComponent,
    canActivate: [JwtLogoutGuard]
  },
  {
    path: 'register-category',
    component: CreateCategoryPieceComponent,
    canActivate: [JwtLogoutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufactureRoutingModule { }
