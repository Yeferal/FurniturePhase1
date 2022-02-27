import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';
import { ConsultInvoicesComponent } from './pages/consult-invoices/consult-invoices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckCustomerReturnsComponent } from './pages/check-customer-returns/check-customer-returns.component';
import { RegisterFurnitureReturnComponent } from './pages/register-furniture-return/register-furniture-return.component';
import { RegisterLostComponent } from './components/register-lost/register-lost.component';



@NgModule({
  declarations: [
    SalesOfDayComponent,
    FurnitureAvailableComponent,
    ConsultInvoicesComponent,
    CheckCustomerReturnsComponent,
    RegisterFurnitureReturnComponent,
    RegisterLostComponent,
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
