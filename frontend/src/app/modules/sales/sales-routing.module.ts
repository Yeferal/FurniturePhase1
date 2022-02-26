import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureAvailableComponent } from './components/furniture-available/furniture-available.component';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';
import { PageGenerateInvoiceComponent } from './pages/page-generate-invoice/page-generate-invoice.component';

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
    path: 'do-sale',
    component: PageGenerateInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
