import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private router = inject(Router);
  sendIdInUrl(id: string): void {
    this.router.navigate(['/details', id]);
  }
}
