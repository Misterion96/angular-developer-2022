import { Component } from '@angular/core';
import { RouterListenerService } from './core/router/router-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`:host {display:block; margin: 0 auto; padding: 16px}`]
})
export class AppComponent {
  title = 'angular-developer-2022';

  constructor(
      private readonly routerListenerService: RouterListenerService,
  ) {
    this.routerListenerService.init()
  }
}
