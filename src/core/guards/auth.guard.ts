import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authServices = inject(AuthService);
  if (authServices.checkOnBrowser()) {
    if (localStorage.getItem("token")) {
      return true;
    }
  }
  router.navigate(['auth/sign-in']);
  return false;
};
