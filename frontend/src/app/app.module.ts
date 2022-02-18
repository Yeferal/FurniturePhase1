import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteComponent } from './module/white/pages/white/white.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TemplateHomeComponent } from './module/white/pages/template-home/template-home.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PiecesRoutingModule } from './module/pieces/pieces-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WhiteComponent,
    FooterComponent,
    TemplateHomeComponent,
    ModalComponent,
    SideBarComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PiecesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
