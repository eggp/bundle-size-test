import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {environment} from '../../../test3/src/environments/environment';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    if (environment.production === false) {
      console.log('uzike1');
    }
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  x() {
    console.log('uzike2');
  }
}
