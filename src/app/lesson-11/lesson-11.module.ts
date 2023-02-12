import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ColorizeValueDirective } from './host-binding/task/colorize-value.directive';
import { ColorizeTableComponent } from './host-binding/task/colorize-table/colorize-table.component';
import { ItemSelectedDirective } from './host-listener/example/item-selected.directive';
import { KeyboardNavigateDirective } from './host-listener/example/keyboard-navigate.directive';
import { VisitedBlockComponent } from './host-listener/task/visited-block.component';

import { HostBindingComponent } from './host-binding/example/host-binding.component';
import { HostListenerComponent } from './host-listener/example/host-listener.component';
import { NgContentComponent } from './ng-content/example/ng-content.component';
import {
    MyCardWithContentComponent
} from './ng-content/task/my-card-with-content/my-card-with-content.component';
import { NgContentTaskComponent } from './ng-content/task/ng-content-task/ng-content-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
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
    exports: [
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
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class Lesson11Module {
}
