// authentication.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticatedValue = false;

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  login(): void {
    // Your login logic here...
    this.isAuthenticatedValue = true;
  }

  logout(): void {
    // Your logout logic here...
    this.isAuthenticatedValue = false;
  }
}