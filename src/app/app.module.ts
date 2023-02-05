import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HostBindingComponent } from './lesson/host-binding/host-binding.component';
import { HostListenerComponent } from './lesson/host-listener/host-listener.component';
import { NgContentComponent } from './lesson/ng-content/example/ng-content.component';
import {
  MyCardWithContentComponent
} from './lesson/ng-content/task/my-card-with-content/my-card-with-content.component';
import { NgContentTaskComponent } from './lesson/ng-content/task/ng-content-task/ng-content-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    HostListenerComponent,
    HostBindingComponent,
    MyCardWithContentComponent,
    NgContentTaskComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
