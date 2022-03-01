import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CreationFurniturePlansComponent } from './pages/creation-furniture-plans/creation-furniture-plans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CreationFurniturePlansComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class AdminModule { }
