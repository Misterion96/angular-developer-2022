import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    actionsPosts,
    PostsState,
    selectPosts
} from '../+state';
import { actionsLoading } from '../../../../+state/loading';
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
        this.store.dispatch(actionsLoading.on())
        this.store.dispatch(actionsPosts.load())
        this.apiService.getAll$().subscribe(r => {
            this.store.dispatch(actionsLoading.off())
            this.store.dispatch(actionsPosts.loaded({payload: r}))
        })
    }

    public getPostById$(id: PostInterface['id']): Observable<PostInterface> {
        return this.apiService.getById$(id)
    }

    public getPostComments$(id: PostInterface['id']): Observable<PostCommentsInterface[]> {
        return this.apiService.getCommentsById$(id)
    }

    public deletePost$(id: PostInterface['id']): void {
        this.store.dispatch(actionsPosts.postdelete())
        this.apiService.delete$(id).subscribe(() => {
            this.store.dispatch(actionsPosts.postdeleted({payload: id}))
        })
    }
}
