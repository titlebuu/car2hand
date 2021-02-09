import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarAllPageComponent } from './containers/car-all-page/car-all-page.component';
import { CarViewPageComponent } from './containers/car-view-page/car-view-page.component';
import { CarAddPageComponent } from './containers/car-add-page/car-add-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: CarAllPageComponent
  },
  {
    path: 'view/:id',
    component: CarViewPageComponent
  },
  {
    path: 'add',
    component: CarAddPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
