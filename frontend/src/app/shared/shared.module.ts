import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchPiecePipe } from './pipes/search-piece.pipe';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { AlertComponent } from './components/alert/alert.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionsComponent } from './components/actions/actions.component';
@NgModule({
  declarations: [
    FooterComponent,
    ModalComponent,
    SideBarComponent,
    TopBarComponent,
    SearchPiecePipe,
    ContainerComponent,
    AlertComponent,
    AppSearchComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    ModalComponent,
    SideBarComponent,
    TopBarComponent,
    SearchPiecePipe,
    ContainerComponent,
    AppSearchComponent,
    ActionsComponent,
    AlertComponent,
  ]
})
export class SharedModule { }
