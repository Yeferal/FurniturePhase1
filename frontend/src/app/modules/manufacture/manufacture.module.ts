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
import { PieceInformationComponent } from './components/piece-information/piece-information.component';
import { PieceFormComponent } from './components/piece-form/piece-form.component';
import { FurnitureInformationComponent } from './components/furniture-information/furniture-information.component';


@NgModule({
  declarations: [
    ListPiecesComponent,
    ListCategoryComponent,
    AppSearchComponent,
    ListFurnitureComponent,
    PieceInformationComponent,
    PieceFormComponent,
    FurnitureInformationComponent
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
