import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }
  adminEmail: String = 'amro@gmail.com';
  adminPassword: String = '123';

  public isAuthenticated(): boolean {
    if (localStorage.getItem('logIn') == 'yes') {
      console.log('this user is authnticated');
      return true;
    } else {
      console.log('this user is not authnticated');
      return false;
    }
  }
  logIn(email: String, password: String): void {
    if (email == this.adminEmail && password == this.adminPassword) {
      localStorage.setItem('logIn', 'yes');
    }
    else {
      localStorage.setItem('logIn', 'no');
    }
  }
  logout() {
    localStorage.clear();
  }
}
