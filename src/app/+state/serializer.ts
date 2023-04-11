import { Data, Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store/src/reducer';
import { createSelector, MemoizedSelector } from '@ngrx/store';

export interface AppRouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
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
            root: { queryParams },
        } = state;
        const { params, data } = currentRoute;

        return { url, params, queryParams, data };
    }
}

const selectRouteState = (state: {router: RouterReducerState<AppRouterStateUrl>}) => state.router

const routerState = createSelector(
    selectRouteState,
    state => state.state
)

export const selectQueryParams = createSelector(
    routerState,
    state => state.queryParams
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
