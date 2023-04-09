import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionsLoading, selectLoading } from './+state/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`:host {display:block; margin: 0 auto; padding: 16px}`]
})
export class AppComponent {
  title = 'angular-developer-2022';
  public readonly loading$ = this.store.select(selectLoading)

  constructor(
      private readonly store: Store
  ) {
  }
}
