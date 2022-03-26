import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { CheckCustomerReturnsComponent } from './pages/check-customer-returns/check-customer-returns.component';
import { ConsultInvoicesComponent } from './pages/consult-invoices/consult-invoices.component';
import { RegisterFurnitureReturnComponent } from './pages/register-furniture-return/register-furniture-return.component';
import { PageGenerateInvoiceComponent } from './pages/page-generate-invoice/page-generate-invoice.component';
import { SalesByClientComponent } from './components/sales-by-client/sales-by-client.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { JwtLogoutGuard } from 'src/app/core/guards/jwt-logout.guard';

const routes: Routes = [{
    path:'sales-of-day',
    component: SalesOfDayComponent,
    canActivate: [JwtLogoutGuard]
  },{
    path:'available-furnitures',
    component: FurnitureAvailableComponent,
    canActivate: [JwtLogoutGuard]
  },{
    path:'consult-invoices',
    component: ConsultInvoicesComponent,
    canActivate: [JwtLogoutGuard]
  },{
    path:'check-costumer-returns',
    component: CheckCustomerReturnsComponent,
    canActivate: [JwtLogoutGuard]
  },
  {
    path:'register-furniture-return',
    component: RegisterFurnitureReturnComponent,
    canActivate: [JwtLogoutGuard]
  },{
    path: 'do-sale',
    component: PageGenerateInvoiceComponent,
    canActivate: [JwtLogoutGuard]
  },
  {
    path: 'sales-by-client',
    component: SalesByClientComponent,
    canActivate: [JwtLogoutGuard]
  },
  {
    path: 'earnings',
    component: EarningsComponent,
    canActivate: [JwtLogoutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
