import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostCommentsInterface, PostInterface } from '../interfaces/posts.interfaces';
import { ImagesService } from './images.service';
import { PostsApiService } from './posts-api.service';

@Injectable()
export class PostsService {
    constructor(
        private readonly imageService: ImagesService,
        private readonly apiService: PostsApiService,
    ) {
    }

    public getPostImage$(id: PostInterface['id']): Observable<string> {
        return this.imageService.getImage(id.toString());
    }

    public getAllPosts$(): Observable<PostInterface[]> {
        return this.apiService.getAll$()
    }

    public getPostById$(id: PostInterface['id']): Observable<PostInterface> {
        return this.apiService.getById$(id)
    }

    public getPostComments$(id: PostInterface['id']): Observable<PostCommentsInterface[]> {
        return this.apiService.getCommentsById$(id)
    }

    public deletePost$(id: PostInterface['id']): Observable<void> {
        return this.apiService.delete$(id)
    }
}
