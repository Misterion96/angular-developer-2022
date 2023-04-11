import { Data, Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store/src/reducer';
import { createSelector, MemoizedSelector } from '@ngrx/store';

export interface AppRouterStateUrl {
    url: string;
    params: Params;
    data: Data;
}

export class AppSerializer
    implements RouterStateSerializer<AppRouterStateUrl> {
    serialize(state: RouterStateSnapshot): AppRouterStateUrl {
        let currentRoute = state.root;

        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
        }

        const {
            url,
        } = state;
        const { params, data } = currentRoute;

        return { url, params, data };
    }
}

const selectRouteState = (state: {router: RouterReducerState<AppRouterStateUrl>}) => state.router

const routerState = createSelector(
    selectRouteState,
    state => state.state
)

export const selectRouteParams = createSelector(
    routerState,
    state => state.params
)

export const selectRouteParam = (param: string): MemoizedSelector<{router: RouterReducerState<AppRouterStateUrl>}, string> => {
    return createSelector(
        selectRouteParams,
        params => params[param]
    )
}
