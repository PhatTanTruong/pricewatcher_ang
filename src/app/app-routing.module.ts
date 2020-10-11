import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SCREEN_PATH } from './core/shared/app-constants/app.constants';

const routes: Routes = [
  {
    path: SCREEN_PATH.HOME,
    loadChildren: () => import('../pages/landing/landing.module').then((m) => m.LandingModule)
  },
  {
    path: SCREEN_PATH.LOGIN,
    loadChildren: () => import('../pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: SCREEN_PATH.RESGISTER,
    loadChildren: () => import('../pages/register/register.module').then((m) => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
