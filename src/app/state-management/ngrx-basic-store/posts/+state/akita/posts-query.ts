import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PostsState, PostsStateInterface } from './posts-state';

@Injectable()
export class PostsQuery extends Query<PostsStateInterface> {
    constructor(
        private readonly state: PostsState
    ) {
        super(state);
    }

    public readonly posts$ = this.select('posts')
}
