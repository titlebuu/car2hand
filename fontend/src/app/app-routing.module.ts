import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { LINK_PHONPHISAI } from './ponpisai/shared/constants/data.constant';
import { LINK_NONGKHAI } from './nongkhai/shared/constants/data.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: LINK_PHONPHISAI,
    pathMatch: 'full'
  },
  {
    path: LINK_PHONPHISAI,
    loadChildren: () => import('./ponpisai/ponpisai.module').then(m => m.PonpisaiModule)
  },
  {
    path: LINK_NONGKHAI,
    loadChildren: () => import('./nongkhai/nongkhai.module').then(m => m.NongkhaiModule)
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
