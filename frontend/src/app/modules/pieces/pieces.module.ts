import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiecesComponent } from './pages/pieces/pieces.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { PiecesRoutingModule } from './pieces-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
// import { SearchPiecePipe } from 'src/app/shared/pipes/search-piece.pipe';



@NgModule({
  declarations: [
    PiecesComponent,
    ListPiecesComponent,
  ],
  imports: [
    CommonModule,
    PiecesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ]
})
export class PiecesModule { }
