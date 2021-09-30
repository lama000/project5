import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="row">
  <div class="col-md-6 offset-md-3 mt-4">
  <h3>Login </h3>
  <form #f="ngForm"(ngSubmit) ="onSubmit(f)">
  

  <div class="mb-3">
    <label for="loginUsername" class="form-label">Usernames</label>
    <input type="text" name="username" ngModel required #username="ngModel"
    class="form-control"
     id="loginUsername"
     placeholder="Enter username">
     
  </div>
  <div class="mb-3">
    <label for="loginPassword" class="form-label">Password</label>
    <input type="password"
     name="password"
      ngModel required #password="ngModel"
    class="form-control"
    id="loginPassword"
    placehilder="Password">
  
  </div>
   <div class="mb-3 form-check">
    <a [routerLink] = "['/resetpassword']" >Forgot Password</a>
  </div>
  <button type="submit"
  [disabled]="f.invalid"
   class="btn btn-primary">Login <i class="fas fa-sign-in-alt"></i></button>
</form>
</div>
</div>

  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const loginObserver = {
      next: (x:any) => console.log('User logged in '),
      error: (err: Error) => console.log(err)
    };
    this.authService.login(f.value).subscribe();
    
  }

}
