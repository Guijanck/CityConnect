import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  <app-footer></app-footer>
  `
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
