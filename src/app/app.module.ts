import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HostBindingComponent } from './lesson/host-binding/example/host-binding.component';
import { HostListenerComponent } from './lesson/host-listener/example/host-listener.component';
import { NgContentComponent } from './lesson/ng-content/example/ng-content.component';
import { MyCardWithContentComponent } from './lesson/ng-content/task/my-card-with-content/my-card-with-content.component';
import { NgContentTaskComponent } from './lesson/ng-content/task/ng-content-task/ng-content-task.component';
import 'zone.js';
import { NgContainerComponent } from './lesson/ng-container/ng-container.component';
import { NgTemplateComponent } from './lesson/ng-template/ng-template.component';
import { ColorizeValueDirective } from './lesson/host-binding/task/colorize-value.directive';
import { ColorizeTableComponent } from './lesson/host-binding/task/colorize-table/colorize-table.component';
import { ItemSelectedDirective } from './lesson/host-listener/example/item-selected.directive';
import { KeyboardNavigateDirective } from './lesson/host-listener/example/keyboard-navigate.directive';
import { VisitedBlockComponent } from './lesson/host-listener/task/visited-block.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    MyCardWithContentComponent,
    NgContentTaskComponent,
    NgContainerComponent,
    NgTemplateComponent,
    ColorizeValueDirective,
    ColorizeTableComponent,
    HostBindingComponent,
    ItemSelectedDirective,
    HostListenerComponent,
    KeyboardNavigateDirective,
    VisitedBlockComponent,
  ],
    imports: [CommonModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
