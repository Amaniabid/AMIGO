import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      // User is authenticated, allow access to the protected routes
      return true;
    } else {
      // User is not authenticated, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}