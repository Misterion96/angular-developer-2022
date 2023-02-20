import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`:host {display:block; margin: 0 auto; padding: 16px}`]
})
export class AppComponent {
  title = 'article-11-other-directives';
}
