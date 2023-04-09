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
}

const initialPostsState: PostsState = {
    posts: [],
}

export const actionsPosts = createActionGroup(
    {
        source: 'Posts',
        events: {
            load: emptyProps(),
            loaded: props<{payload: PostInterface[]}>(),
            postDelete: emptyProps(),
            postDeleted: props<{payload: PostInterface['id']}>()
        }
    }
)

const postsReducer = createReducer(
    initialPostsState,
    on(actionsPosts.loaded, (state, action) => {
        return {
            posts: action.payload,
        }
    }),
    on(actionsPosts.postdeleted, (state, action) => {
        return {
            posts: state.posts.filter(p => p.id !== action.payload),
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
