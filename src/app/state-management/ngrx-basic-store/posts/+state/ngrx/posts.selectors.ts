import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, FEATURE_POSTS } from './posts.feature';
import { PostsState } from './posts.state';

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
