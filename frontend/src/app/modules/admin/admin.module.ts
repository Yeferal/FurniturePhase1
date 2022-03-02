import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreationFurniturePlansComponent } from './pages/creation-furniture-plans/creation-furniture-plans.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { ReportTableComponent } from './components/report-table/report-table.component';



@NgModule({
  declarations: [
    RegisterUserComponent,
    ListUsersComponent,
    CreationFurniturePlansComponent,
    ReportsComponent,
    ReportsPageComponent,
    ReportTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class AdminModule { }
