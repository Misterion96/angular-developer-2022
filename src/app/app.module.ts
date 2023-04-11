import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiLoaderModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { loadingSlice } from './+state/loading';
import { AppRouting } from './app-routing';

import { AppComponent } from './app.component';

import 'zone.js';


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
        StoreModule.forRoot({
            ...loadingSlice,
        }),
        EffectsModule.forRoot(),
        RouterModule.forRoot([{
            path: AppRouting.STATE_MANAGEMENT,
            loadChildren: () => import('./state-management/state-management.module').then(m => m.StateManagementModule)
        }]),
        TuiLoaderModule
    ],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    bootstrap: [AppComponent],
})
export class AppModule {
}
