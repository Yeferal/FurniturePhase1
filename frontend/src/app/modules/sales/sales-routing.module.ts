import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOfDayComponent } from './components/sales-of-day/sales-of-day.component';

const routes: Routes = [

  {
    path:'sales-of-day',
    component: SalesOfDayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
