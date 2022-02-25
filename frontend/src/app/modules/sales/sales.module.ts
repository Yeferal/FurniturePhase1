import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';



@NgModule({
  declarations: [
    SalesOfDayComponent,
    FurnitureAvailableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule,
  ]
})
export class SalesModule { }
