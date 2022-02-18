import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhitePageComponent } from './pages/white-page/white-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhiteRoutingModule } from './white-routing.module';
import { TemplateHomeComponent } from './pages/template-home/template-home.component';



@NgModule({
  declarations: [
    WhitePageComponent,
    TemplateHomeComponent
  ],
  imports: [
    CommonModule,
    WhiteRoutingModule,
    SharedModule
  ]
})
export class WhiteModule { }
