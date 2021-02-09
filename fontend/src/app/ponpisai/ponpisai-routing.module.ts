import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PonpisaiComponent } from './ponpisai.component';

const routes: Routes = [
  {
    path: '',
    component: PonpisaiComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./containers/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'car',
        loadChildren: () => import('./containers/car/car.module').then(m => m.CarModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./containers/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'promotion',
        loadChildren: () => import('./containers/promotion/promotion.module').then(m => m.PromotionModule)
      },
      {
        path: 'reviews',
        loadChildren: () => import('./containers/reviews/reviews.module').then(m => m.ReviewsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./containers/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./containers/admin/admin.module').then(m => m.AdminModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PonpisaiRoutingModule { }
