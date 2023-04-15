import { createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { PostInterface } from '../../interfaces/posts.interfaces';
import { actionsPosts } from './posts.actions';
import { PostsState } from './posts.state';

export const adapter = createEntityAdapter<PostInterface>({
    selectId: post => post.id,
    sortComparer: false
})

const initialPostEntityState = adapter.getInitialState()

const initialPostsState: PostsState = {
    posts: initialPostEntityState,
}

const postsReducer = createReducer(
    initialPostsState,
    on(actionsPosts.loaded, (state, action) => {
        return {
            posts: adapter.setAll(action.payload, state.posts),
        }
    }),
    on(actionsPosts.postdeleted, (state, action) => {
        return {
            posts: adapter.removeOne(action.payload, state.posts)
        }
    })
);

export const FEATURE_POSTS = 'postsState'

export const postsFeature = createFeature({
    name: FEATURE_POSTS,
    reducer: postsReducer
})


