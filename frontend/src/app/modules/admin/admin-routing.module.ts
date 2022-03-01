import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  // {
  //   path: 'pieces',
  //   component: PiecesComponent
  // },
  {
    path: 'register-user',
    component: RegisterUserComponent
  },
  {
    path: 'list-user',
    component: ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
