import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManufactureRoutingModule } from './manufacture-routing.module';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { ListFurnitureComponent } from './components/list-furniture/list-furniture.component';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PieceInformationComponent } from './components/piece-information/piece-information.component';
import { PieceFormComponent } from './components/piece-form/piece-form.component';
import { FurnitureInformationComponent } from './components/furniture-information/furniture-information.component';
import { CreateCategoryPieceComponent } from './components/create-category-piece/create-category-piece.component';
import { FilterListPiecesComponent } from './components/filter-list-pieces/filter-list-pieces.component';
import { RegisterFornitureComponent } from './pages/register-forniture/register-forniture.component';
import { ActionsComponent } from './components/actions/actions.component';
import { PageListPiecesComponent } from './pages/page-list-pieces/page-list-pieces.component';


@NgModule({
  declarations: [
    ListPiecesComponent,
    ListCategoryComponent,
    ListFurnitureComponent,
    PieceInformationComponent,
    PieceFormComponent,
    FurnitureInformationComponent,
    CreateCategoryPieceComponent,
    FilterListPiecesComponent,
    RegisterFornitureComponent,
    ActionsComponent,
    PageListPiecesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManufactureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class ManufactureModule { }
