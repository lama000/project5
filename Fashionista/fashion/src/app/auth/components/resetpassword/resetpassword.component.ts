import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  template: `
  <div class="row">
  <div class="col-md-6 offset-md-3 mt-4">
  <h3>Reset Password </h3>
  <form #f="ngForm"
  (ngSubmit)="onSubmit(f)">
  
  <div class="mb-3">
    <label for="resetpasswordEmail" class="form-label">Account Email</label>
    <input type="email"
    name="email"
    ngModel
    required
    #email="ngModel"
    class="form-control"
    id="resetPasswordEmail"
    placeholder="Enter email">
</div>

<button type="submit"
 [disabled]="f.invalid"
 class="btn btn-primary">Reset Password <i class="fas fa-paper-plane"></i></button>

</form>
</div>
</div>

  `,
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
