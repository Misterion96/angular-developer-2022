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
    imports: [CommonModule, BrowserModule, ...LESSONS],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
