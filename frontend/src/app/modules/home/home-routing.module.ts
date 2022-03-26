import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtLogoutGuard } from 'src/app/core/guards/jwt-logout.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [JwtLogoutGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
