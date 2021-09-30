import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
  <div class="row">
  <div class="col-md-6 offset-md-3 mt-4">
  <h3>Login </h3>
  <form #f="ngForm" (ngSubmit)="onSubmit(f)" >
  <div class="mb-3">
    <label for="registerUsername" class="form-label">Usernames</label>
    <input type="text"
    name="username"
    ngModel
    required
    #username="ngModel"
    class="form-control"
    id="registerUsername"
    placeholder="Enter username">
  </div>
  <div class="mb-3">
    <label for="registerEmail" class="form-label">emails</label>
    <input type="email"
    name="email"
    ngModel
    required
    #email="ngModel"
    class="form-control"
    id="registerEmail"
    placeholder="Enter email">
  </div>
  <div class="mb-3">
    <label for="registerPassword" class="form-label">Password</label>
    <input type="password"
                       name="password"
                       ngModel
                       required
                       #password="ngModel"
                       class="form-control"
                       id="registerPassword"
                       placeholder="Password">
  </div>
   
  <button type="submit"
                    [disabled]="f.invalid"
                    class="btn btn-primary">Register <i class="fas fa-sign-in-alt"></i></button>
</form>
</div>
</div>

  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
