import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { timer } from 'rxjs';

@Component({
  selector: 'bundle-size-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    environment.production = true;

    timer(300).subscribe(() => {
      environment.production = false;
      this.testMethod();
    });
  }

  private testMethod() {
    if (environment.production === false) {
      console.log('uzike1');
    }
  }

  x() {
    console.log('uzike2');
  }
}
