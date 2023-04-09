import { createActionGroup, createReducer, createSelector, emptyProps, on } from '@ngrx/store';

export interface LoadingStateInterface {
    loading: boolean
}

export const initialLoadingState: LoadingStateInterface = {
    loading: false
}

export const actionsLoading = createActionGroup({
    source: 'Global Loading',
    events: {
        on: emptyProps(),
        off: emptyProps()
    }
})

const loadingReducer = createReducer(
    initialLoadingState,
    on(actionsLoading.on, (state) => ({loading: true})),
    on(actionsLoading.off, (state) => ({loading: false})),
)

export const selectLoading = createSelector<{loadingState: LoadingStateInterface}, LoadingStateInterface, boolean>(
    state => state.loadingState,
    ({loading}) => loading
)

export const loadingSlice = {
    loadingState: loadingReducer,
}
