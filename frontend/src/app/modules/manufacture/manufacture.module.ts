import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManufactureRoutingModule } from './manufacture-routing.module';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { ListFurnitureComponent } from './pages/list-furniture/list-furniture.component';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateCategoryPieceComponent } from './components/create-category-piece/create-category-piece.component';
import { FilterListPiecesComponent } from './components/filter-list-pieces/filter-list-pieces.component';
import { RegisterFornitureComponent } from './pages/register-forniture/register-forniture.component';


@NgModule({
  declarations: [
    ListPiecesComponent,
    ListCategoryComponent,
    AppSearchComponent,
    ListFurnitureComponent,
    CreateCategoryPieceComponent,
    FilterListPiecesComponent,
    RegisterFornitureComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManufactureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ManufactureModule { }
