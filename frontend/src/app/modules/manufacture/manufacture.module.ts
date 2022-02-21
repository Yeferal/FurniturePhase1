import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManufactureRoutingModule } from './manufacture-routing.module';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateCategoryPieceComponent } from './components/create-category-piece/create-category-piece.component';



@NgModule({
  declarations: [
    ListPiecesComponent,
    CreateCategoryPieceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManufactureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ManufactureModule { }
