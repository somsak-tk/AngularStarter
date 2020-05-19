import { Routes } from '@angular/router';
import { LayoutComponent, SigninPageComponent } from './views2/layout';

import { AuthGuardService } from './shared/services/auth-guard.service';

export const _ROUTES_MENU: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninPageComponent,
    data: {
      title: 'Signin Page'
    }
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ AuthGuardService ],
    canActivateChild: [ AuthGuardService ],
    data: {
      title: 'หน้าแรก'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('../app/views2/home/home.module').then(m => m.HomeModule)
      },
    ]
  }
];
