import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';



@NgModule({
  declarations: [
    SalesOfDayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
