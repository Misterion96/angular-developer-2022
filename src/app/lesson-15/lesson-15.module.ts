import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiErrorModule, TuiGroupModule } from '@taiga-ui/core';
import {
    TuiCheckboxBlockModule,
    TuiFieldErrorPipeModule,
    TuiInputModule, TuiInputPhoneModule,
    TuiRangeModule,
    TuiSliderModule
} from '@taiga-ui/kit';
import { FormArrayAddComponent } from './examples/form-array/form-array-add.component';
import { Lesson15ExamplesComponent } from './examples/lesson15-examples.component';
import { CheckNameService } from './shared/services/check-name.service';
import { SharedLesson15Module } from './shared/shared-lesson-15.module';
import { FormValidatorsComponent } from './examples/form-validators/form-validators.component';
import { FormControlComponent } from './examples/form-control/form-control.component';
import { FormGroupComponent } from './examples/form-group/form-group.component';
import { FormArrayComponent } from './examples/form-array/form-array.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        TuiInputModule,
        TuiRangeModule,
        TuiForModule,
        CommonModule,
        TuiSliderModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiButtonModule,
        SharedLesson15Module,
        TuiCheckboxBlockModule,
        TuiInputPhoneModule,
        TuiGroupModule
    ],
    declarations: [
        Lesson15ExamplesComponent,
        FormValidatorsComponent,
        FormControlComponent,
        FormGroupComponent,
        FormArrayComponent,
        FormArrayAddComponent
    ],
    exports: [
        Lesson15ExamplesComponent
    ],
    providers: [
        CheckNameService
    ]
})
export class Lesson15Module {
}
