import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATED, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { actionsLoading } from './loading';
import { AppRouterStateUrl } from './serializer';

@Injectable()
export class RouterEffects {
    constructor(
        private actions: Actions
    ) {
    }

    public navigateOn$ = createEffect(() => {
        return this.actions.pipe(
            ofType(ROUTER_NAVIGATION),
            map(({payload}) => {
                const {routerState} = payload as { routerState: AppRouterStateUrl }
                const {data} = routerState
                const {content} = data || {}

                return actionsLoading.on({content})
            })
        )
    })

    public navigateOff$ = createEffect(() => {
        return this.actions.pipe(
            ofType(ROUTER_NAVIGATED, ROUTER_CANCEL, ROUTER_ERROR),
            map(() => actionsLoading.off())
        )
    })
}
