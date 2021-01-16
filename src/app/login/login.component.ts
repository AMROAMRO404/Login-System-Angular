import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public auth: AuthService,
    public authG: AuthGuardService
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
