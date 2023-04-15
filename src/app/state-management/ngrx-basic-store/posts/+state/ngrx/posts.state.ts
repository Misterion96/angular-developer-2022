import { EntityState } from '@ngrx/entity';
import { PostInterface } from '../../interfaces/posts.interfaces';

export interface PostsState {
    posts: EntityState<PostInterface>,
}
