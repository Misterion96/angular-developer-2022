import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParseControlValueComponent } from './components/parse-control-value/parse-control-value.component';
import { ParseControlErrorsComponent } from './components/parse-control-errors/parse-control-errors.component';
import { ParseFormGroupErrorsComponent } from './components/parse-form-group-errors/parse-form-group-errors.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ParseControlValueComponent,
        ParseControlErrorsComponent,
        ParseFormGroupErrorsComponent
    ],
    declarations: [
        ParseControlValueComponent,
        ParseControlErrorsComponent,
        ParseFormGroupErrorsComponent
    ]
})
export class SharedLesson15Module {}
