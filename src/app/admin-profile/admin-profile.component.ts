import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private auth: AuthService, private rout: Router) { }

  ngOnInit(): void {
  }
  logOut() {
    this.auth.logout()
    this.rout.navigate(['login'])
  }

}
