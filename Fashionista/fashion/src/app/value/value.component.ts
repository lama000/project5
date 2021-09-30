import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  template: `
  <p *ngFor="let value of values">{{value.name}}</p>
<p><i class="fab fa-500px"></i>testing brands icons</p>
<p><i class="fas fa-allergies"></i>test solid icons</p>`,
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    return this.http.get("http://localhost:4200").subscribe(response => {
      console.log(response);
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}