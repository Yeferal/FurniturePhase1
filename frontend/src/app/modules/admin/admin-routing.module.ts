import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtLogoutGuard } from 'src/app/core/guards/jwt-logout.guard';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CreationFurniturePlansComponent } from './pages/creation-furniture-plans/creation-furniture-plans.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';

const routes: Routes = [
  {
    path: 'register-user',
    component: RegisterUserComponent,
    canActivate: [JwtLogoutGuard]
  },
  {
    path: 'list-user',
    component: ListUsersComponent,
    canActivate: [JwtLogoutGuard]
  },{
    path: 'creation-furniture-plans',
    component: CreationFurniturePlansComponent,
    canActivate: [JwtLogoutGuard]
  },{
    path: 'reports',
    component: ReportsPageComponent,
    canActivate: [JwtLogoutGuard]
  }
  // {
  //   // path: '**',//TODO 404 cuando no existe la ruta
  //   // redirectTo: '/3'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
