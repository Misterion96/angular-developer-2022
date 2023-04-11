import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TuiLetModule } from '@taiga-ui/cdk';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiLoaderModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { loadingSlice } from './+state/loading';
import { RouterEffects } from './+state/router-effects';
import { AppSerializer } from './+state/serializer';
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
            router: routerReducer,
        }),
        EffectsModule.forRoot([RouterEffects]),
        RouterModule.forRoot([{
            path: AppRouting.STATE_MANAGEMENT,
            loadChildren: () => import('./state-management/state-management.module').then(m => m.StateManagementModule)
        }]),
        StoreRouterConnectingModule.forRoot({
            serializer: AppSerializer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,

        }),
        TuiLoaderModule,
        TuiAlertModule,
        TuiLetModule
    ],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    bootstrap: [AppComponent],
})
export class AppModule {
}
