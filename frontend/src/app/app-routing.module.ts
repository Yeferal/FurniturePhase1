import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //TODO: router-outlet (Padre)
  {
    path: '', //TODO (Public) Login, Register, Forgot...
    // pathMatch: 'full',
    loadChildren: () => import(`./modules/white/white.module`).then(m => m.WhiteModule)
  },
  {
    path: '3',
    loadChildren: () => import(`./modules/pieces/pieces.module`).then(m => m.PiecesModule)
  },
  // {
  //   path: '',//TODO (Private) 🔴🔴
  //   component: HomePageComponent,
  //   loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
  //   canActivate: [SessionGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
