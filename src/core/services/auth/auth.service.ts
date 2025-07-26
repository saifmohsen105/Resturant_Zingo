import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = inject(Auth);
  signIn(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass);
  }
  signUp(email: string, pass: string) {
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }
  signOut() {
    return signOut(this.auth);
  }
  checkOnBrowser(): boolean {
    return isPlatformBrowser(inject(PLATFORM_ID));
  }
}
