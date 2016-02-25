import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {BrianWebAngular} from 'brian-web-angular';

@Component({
  selector: 'main'
})

@View({
  directives: [BrianWebAngular],
  template: `
    <brian-web-angular></brian-web-angular>
  `
})

class Main {

}

bootstrap(Main);
