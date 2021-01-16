import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {

  }
  ngOnInit(): void {
    localStorage.setItem('logIn', 'no')
  }
  email: any;
  password: any;
  logIn() {
    this.auth.logIn(this.email, this.password);
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['admin-page'])
    }
    else {
      alert("The email address of the admin or password is wrong !!")
    }
  }

}
