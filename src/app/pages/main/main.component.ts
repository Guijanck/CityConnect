import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <app-navbar></app-navbar>
  <p>
    main NEW works!
  </p>
  <app-footer></app-footer>
  `
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
