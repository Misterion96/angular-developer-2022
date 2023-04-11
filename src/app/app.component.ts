import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { selectLoading } from './+state/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`:host {display:block; margin: 0 auto; padding: 16px}`]
})
export class AppComponent {
  title = 'angular-developer-2022';
  public readonly loading$ = this.store.select(selectLoading).pipe(
      delay(0)
  )

  constructor(
      private readonly store: Store
  ) {
  }
}
