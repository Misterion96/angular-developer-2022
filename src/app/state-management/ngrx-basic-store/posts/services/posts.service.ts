import { Inject, Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { Observable, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostsAkitaFacade } from '../+state/akita/posts-akita.facade';
import { PostsCustomStoreFacade } from '../+state/custom-store';
import { NgxsPostsState } from '../+state/ngxs';

import { PostCommentsInterface, PostInterface } from '../interfaces/posts.interfaces';
import { ImagesService } from './images.service';
import { PostsApiService } from './posts-api.service';

@Injectable()
export class PostsService {
    @Select(NgxsPostsState.posts)
    public readonly posts$

    constructor(
        private readonly imageService: ImagesService,
        private readonly apiService: PostsApiService,
        private readonly postsCustomStore: PostsCustomStoreFacade
    ) {
    }

    public getPostImage$(id: PostInterface['id']): Observable<string> {
        return this.imageService.getImage(id.toString());
    }

    public deletePost$(id: PostInterface['id']): void {
        this.postsCustomStore.deletePost(id);
    }

    public getAllPosts$(): void {
        this.postsCustomStore.getAll();
    }

    public getPostById$(id: PostInterface['id']): Observable<PostInterface> {
        return this.apiService.getById$(id)
    }

    public getPostComments$(id: PostInterface['id']): Observable<PostCommentsInterface[]> {
        return this.apiService.getCommentsById$(id)
    }

}
