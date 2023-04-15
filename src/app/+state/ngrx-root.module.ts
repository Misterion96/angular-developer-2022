import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        EffectsModule.forRoot([]),

    ]
})
export class NgrxRootModule {
    constructor(
        @Optional()
        @SkipSelf()
            rootModule: NgrxRootModule
    ) {
        if (!rootModule) {
            return
        }

        throw new Error('NgrxRootModule already registered')
    }
}
