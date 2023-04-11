import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    actionsPosts,
    PostsState,
    selectPosts
} from '../+state';
import { PostCommentsInterface, PostInterface } from '../interfaces/posts.interfaces';
import { ImagesService } from './images.service';
import { PostsApiService } from './posts-api.service';

@Injectable()
export class PostsService {
    public readonly posts$ = this.store.pipe(
        select(selectPosts),
    )

    constructor(
        private readonly imageService: ImagesService,
        private readonly apiService: PostsApiService,
        private readonly store: Store<{posts: PostsState}>,
    ) {
    }

    public getPostImage$(id: PostInterface['id']): Observable<string> {
        return this.imageService.getImage(id.toString());
    }

    public getAllPosts$(): void {
        this.store.dispatch(actionsPosts.load())
    }

    public getPostById$(id: PostInterface['id']): Observable<PostInterface> {
        return this.apiService.getById$(id)
    }

    public getPostComments$(id: PostInterface['id']): Observable<PostCommentsInterface[]> {
        return this.apiService.getCommentsById$(id)
    }

    public deletePost$(id: PostInterface['id']): void {
        this.store.dispatch(actionsPosts.postdelete({payload: id}))
    }
}
