import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './components/list-users/list-users.component';



@NgModule({
  declarations: [
    RegisterUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
