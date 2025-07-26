// app.routes.ts
import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthLayoutsComponent } from './pages/auth/auth-layouts/auth-layouts.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SingUpComponent } from './pages/auth/sing-up/sing-up.component';
import { authGuard } from '../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutsComponent,
    children: [
      { path: 'sign-in', component: SignInComponent, title: 'Sign-in' },
      { path: 'sign-up', component: SingUpComponent, title: 'Sign-up' }
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home/home.component').then(m => m.HomeComponent), canActivate: [authGuard], title: 'Home'
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent), canActivate: [authGuard], title: 'Menu'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), canActivate: [authGuard], title: 'About'
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./pages/details-cart/details-cart.component').then(m => m.DetailsCartComponent), canActivate: [authGuard], title: 'Details'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found'
  }
];
