import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManufactureRoutingModule } from './manufacture-routing.module';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ListPiecesComponent
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
