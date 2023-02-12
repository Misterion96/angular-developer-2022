import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowInIntervalModule } from './directives/show-in-interval/show-in-interval.module';
import { AfterViewErrorComponent } from './examples/after-view-error/after-view-error.component';
import { SettersComponent } from './examples/setters/setters.component';
import { TypedChangesComponent } from './examples/typed-changes/typed-changes.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';

@NgModule({
  declarations: [
    LifecyclesComponent,
    SettersComponent,
    TypedChangesComponent,
    AfterViewErrorComponent,
  ],
  imports: [FormsModule, CommonModule, ShowInIntervalModule],
  exports: [LifecyclesComponent, ShowInIntervalModule],
})
export class Lesson7Module {}
