import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    ModalComponent,
    SideBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    ModalComponent,
    SideBarComponent,
    TopBarComponent
  ]
})
export class SharedModule { }
