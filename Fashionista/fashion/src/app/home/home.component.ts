import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<section class="hero is-primary is-bold
  is-fullheight">
  <div class="hero-body">
    <p class="title">
      Fashionesta
    </p>
    <br>

    <p class="subtitle">
    
    </p>
  </div>
</section>`,
  styles: [`
    .hero {
background-image: url('../images/home.jpg') !important;
background-size: cover;
background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
