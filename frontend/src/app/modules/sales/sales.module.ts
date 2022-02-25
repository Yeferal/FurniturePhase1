import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';
import { ConsultInvoicesComponent } from './pages/consult-invoices/consult-invoices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    SalesOfDayComponent,
    FurnitureAvailableComponent,
    ConsultInvoicesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class SalesModule { }
