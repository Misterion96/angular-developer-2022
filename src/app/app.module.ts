import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import 'zone.js';

import { Lesson7Module } from './lesson-7';
import { Lesson9Module } from './lesson-9';
import { Lesson11Module } from './lesson-11';
import { Lesson13Module } from './lesson-13';

const LESSONS = [
    Lesson7Module,
    Lesson9Module,
    Lesson11Module,
    Lesson13Module
]

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        ...LESSONS,
    ],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    bootstrap: [AppComponent],
})
export class AppModule {
}
