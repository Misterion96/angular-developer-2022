import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives/directives.component';
import { NgClassComponent } from './examples/ng-class/ng-class.component';
import {
  DynamicComponent,
  NgComponentOutletComponent,
} from './examples/ng-component-outlet/ng-component-outlet.component';
import { NgForComponent } from './examples/ng-for/ng-for.component';
import { NgIfComponent } from './examples/ng-if/ng-if.component';
import { NgStyleComponent } from './examples/ng-style/ng-style.component';
import { NgSwitchComponent } from './examples/ng-switch/ng-switch.component';
import { NgTemplateOutletComponent } from './examples/ng-template-outlet/ng-template-outlet.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DirectivesComponent,
    NgStyleComponent,
    NgClassComponent,
    NgTemplateOutletComponent,
    NgComponentOutletComponent,
    NgSwitchComponent,
    DynamicComponent,
    NgIfComponent,
    NgForComponent,
  ],
  exports: [DirectivesComponent],
})
export class Lesson9Module {}
