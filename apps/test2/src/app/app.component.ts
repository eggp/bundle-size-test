import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'bundle-size-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    if (environment.production === false) {
      console.log('uzike1');
    }
  }

  x() {
    console.log('uzike2');
  }
}
