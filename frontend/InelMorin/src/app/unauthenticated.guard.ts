// unauthenticated.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthenticatedGuard implements CanActivate {

  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      // User is not authenticated, allow access
      return true;
    } else {
      // User is already authenticated, redirect to home or another appropriate path
      this.router.navigate(['']);
      return false;
    }
  }
}
