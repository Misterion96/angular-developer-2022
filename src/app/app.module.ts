import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import 'zone.js';
import { Lesson11Module } from './lesson-11/lesson-11.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [CommonModule, BrowserModule, Lesson11Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
