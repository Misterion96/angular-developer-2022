import { createEntityAdapter, EntityState } from '@ngrx/entity';
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
    posts: EntityState<PostInterface>,
}

const adapter = createEntityAdapter<PostInterface>({
    selectId: post => post.id,
    sortComparer: false
})

const initialPostEntityState = adapter.getInitialState()

const initialPostsState: PostsState = {
    posts: initialPostEntityState,
}

export const actionsPosts = createActionGroup(
    {
        source: 'Posts',
        events: {
            load: emptyProps(),
            loaded: props<{payload: PostInterface[]}>(),
            postDelete: props<{payload: PostInterface['id']}>(),
            postDeleted: props<{payload: PostInterface['id']}>()
        }
    }
)

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

const FEATURE_POSTS = 'postsState'

export const postsFeature = createFeature({
    name: FEATURE_POSTS,
    reducer: postsReducer
})
const selectPostsFeature = createFeatureSelector<PostsState>(FEATURE_POSTS)

const selectPostsEntity = createSelector(
    selectPostsFeature,
    (state) => state.posts
)

const {selectAll} = adapter.getSelectors()
export const selectPosts = createSelector(
    selectPostsEntity,
    selectAll
)
