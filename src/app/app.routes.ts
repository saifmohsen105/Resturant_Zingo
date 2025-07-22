import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthLayoutsComponent } from './pages/auth/auth-layouts/auth-layouts.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SingUpComponent } from './pages/auth/sing-up/sing-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsCartComponent } from './pages/details-cart/details-cart.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth', component: AuthLayoutsComponent, children: [
      { path: 'sign-in', component: SignInComponent, title: 'Sign-in' },
      { path: 'sign-up', component: SingUpComponent, title: 'Sign-up' }
    ]
  },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'menu', component: MenuComponent, title: 'Menu' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'details/:id', component:DetailsCartComponent, title: 'Details' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' }
];
