import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //TODO: router-outlet (Padre)
  {
    path: 'home', //TODO (Public) Login, Register, Forgot...
    // pathMatch: 'full',
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  // {
  //   path: 'sales', //http://localhost:4200/sales
  //   loadChildren: () => import(`./modules/sales/sales.module`).then(m => m.SalesModule)
  // },
  {
    path: 'fabricate', //http://localhost:4200/fabricate
    loadChildren: () => import(`./modules/manufacture/manufacture.module`).then(m => m.ManufactureModule)
  },
  // {
  //   path: 'admin', //http://localhost:4200/admin
  //   loadChildren: () => import(`./modules/admin/admin.module`).then(m => m.AdminModule),
  // },
  // {
  //   path: '',//TODO (Private) 🔴🔴
  //   component: HomePageComponent,
  //   loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
  //   canActivate: [SessionGuard]
  // }
  {
    path: 'pi', //http://localhost:4200/fabricate
    loadChildren: () => import(`./modules/pieces/pieces.module`).then(m => m.PiecesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
