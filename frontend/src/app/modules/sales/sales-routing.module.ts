import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { ConsultInvoicesComponent } from './pages/consult-invoices/consult-invoices.component';

const routes: Routes = [

  {
    path:'sales-of-day',
    component: SalesOfDayComponent
  },
  {
    path:'available-furnitures',
    component: FurnitureAvailableComponent
  },
  {
    path:'consult-invoices',
    component: ConsultInvoicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
