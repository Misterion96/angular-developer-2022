import { createActionGroup, createReducer, createSelector, emptyProps, on, props } from '@ngrx/store';

export interface LoadingStateInterface {
    loading: boolean,
    content: string
}

export const initialLoadingState: LoadingStateInterface = {
    loading: false,
    content: 'Loading....'
}

export const actionsLoading = createActionGroup({
    source: 'Global Loading',
    events: {
        on: props<{content?: string}>(),
        off: emptyProps()
    }
})

const loadingReducer = createReducer(
    initialLoadingState,
    on(actionsLoading.on, (state, action) => {
        const {content = 'Loading...'} = action
        return {
            loading: true,
            content,
        }
    }),
    on(actionsLoading.off, (state) => {
        return {
            ...state,
            loading: false
        }
    }),
)

export const selectLoading = createSelector<{loadingState: LoadingStateInterface}, LoadingStateInterface, LoadingStateInterface>(
    state => state.loadingState,
    state => state
)

export const loadingSlice = {
    loadingState: loadingReducer,
}
