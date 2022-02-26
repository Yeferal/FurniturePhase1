import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageGenerateInvoiceComponent } from './pages/page-generate-invoice/page-generate-invoice.component';



@NgModule({
  declarations: [
    SalesOfDayComponent,
    FurnitureAvailableComponent,
    InvoiceComponent,
    ClientFormComponent,
    ClientFormComponent,
    InvoiceComponent,
    PageGenerateInvoiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SalesModule { }
