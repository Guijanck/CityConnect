import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styles: [
    `app-footer {
      box-shadow: 0 -3px 0 var(--primary-color);
      position: sticky;
      bottom: 0;

      width: 100vw;
    }`
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
