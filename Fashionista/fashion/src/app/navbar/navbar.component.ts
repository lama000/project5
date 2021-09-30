import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="navbar is-dark">

  <div class="navbar-brand">
  <a class ="navbar-item">
  
  </a>
  </div>
  
  <div class="navbar-menu">
  <div class="navbar-end">
  <a class="navbar-item" routerLink="/">Home</a>
  <a class="navbar-item" routerLink="/contact">Contact</a>
  <a class="navbar-item" routerLink="/login">Login</a>
  <a class="navbar-item" routerLink="/register">Regiser</a>
  <a class="navbar-item" routerLink="/resetpassword"></a>
  </div>
  </div>
  </div>
          `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
