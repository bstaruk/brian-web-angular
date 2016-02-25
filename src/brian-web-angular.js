import {Component, View} from 'angular2/core';

@Component({
  selector: 'brian-web-angular'
})

@View({
  templateUrl: 'pages/home.html'
})

export class BrianWebAngular {

  constructor() {
    console.info('BrianWebAngular Component Mounted Successfully');
  }

}
