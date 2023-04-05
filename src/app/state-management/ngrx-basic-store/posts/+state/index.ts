import {
    createActionGroup, createFeature,
    createFeatureSelector,
    createReducer,
    createSelector,
    emptyProps, on,
    props
} from '@ngrx/store';
import { PostInterface } from '../interfaces/posts.interfaces';

export interface PostsState {
    posts: PostInterface[],
    loading: boolean
}

const initialPostsState: PostsState = {
    posts: [],
    loading: false
}

export const actionsPosts = createActionGroup(
    {
        source: 'Posts',
        events: {
            load: emptyProps(),
            loaded: props<{payload: PostInterface[]}>(),
            loadedError: props<{payload: unknown}>(),
            postDelete: emptyProps(),
            postDeleted: props<{payload: PostInterface['id']}>()
        }
    }
)

const postsReducer = createReducer(
    initialPostsState,
    on(actionsPosts.load, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(actionsPosts.loaded, (state, action) => {
        return {
            posts: action.payload,
            loading: false
        }
    }),
    on(actionsPosts.loadederror, (state) => {
        return {
            ...state,
            loading: false
        }
    }),
    on(actionsPosts.postdelete, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(actionsPosts.postdeleted, (state, action) => {
        return {
            posts: state.posts.filter(p => p.id !== action.payload),
            loading: false
        }
    })
);

const FEATURE_POSTS = 'postsState'

export const postsFeature = createFeature({
    name: FEATURE_POSTS,
    reducer: postsReducer
})
const selectPostsFeature = createFeatureSelector<PostsState>(FEATURE_POSTS)

export const selectPosts = createSelector(
    selectPostsFeature,
    (state) => state.posts
)

export const selectLoading = createSelector(
    selectPostsFeature,
    (state) => state.loading
)
