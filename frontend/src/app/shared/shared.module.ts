import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchPiecePipe } from './pipes/search-piece.pipe';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FooterComponent,
    ModalComponent,
    SideBarComponent,
    TopBarComponent,
    SearchPiecePipe,
    ContainerComponent,
    AppSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
   
  ],
  exports: [
    FooterComponent,
    ModalComponent,
    SideBarComponent,
    TopBarComponent,
    SearchPiecePipe,
    ContainerComponent,
    AppSearchComponent
  ]
})
export class SharedModule { }
