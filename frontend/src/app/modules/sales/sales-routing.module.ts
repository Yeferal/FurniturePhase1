import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { CheckCustomerReturnsComponent } from './pages/check-customer-returns/check-customer-returns.component';
import { ConsultInvoicesComponent } from './pages/consult-invoices/consult-invoices.component';
import { RegisterFurnitureReturnComponent } from './pages/register-furniture-return/register-furniture-return.component';
import { PageGenerateInvoiceComponent } from './pages/page-generate-invoice/page-generate-invoice.component';

const routes: Routes = [{
    path:'sales-of-day',
    component: SalesOfDayComponent
  },{
    path:'available-furnitures',
    component: FurnitureAvailableComponent
  },{
    path:'consult-invoices',
    component: ConsultInvoicesComponent
  },{
    path:'check-costumer-returns',
    component: CheckCustomerReturnsComponent
  },
  {
    path:'register-furniture-return',
    component: RegisterFurnitureReturnComponent
  },{
    path: 'do-sale',
    component: PageGenerateInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
