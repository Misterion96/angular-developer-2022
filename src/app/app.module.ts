import { RouterModule } from '@angular/router';
import { TuiLetModule } from '@taiga-ui/cdk';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgxsRootModule } from './+state/ngxs-root.module';
import { AppRouting } from './app-routing';

import { AppComponent } from './app.component';

import 'zone.js';
import { LoaderModule } from './core/loader/loader.module';
import { RouterListenerService } from './core/router/router-listener.service';


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
        RouterModule.forRoot([{
            path: AppRouting.STATE_MANAGEMENT,
            loadChildren: () => import('./state-management/state-management.module').then(m => m.StateManagementModule)
        }]),
        // NgxsRootModule,
        TuiAlertModule,
        TuiLetModule,
        LoaderModule
    ],
    providers: [
        {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
        RouterListenerService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
