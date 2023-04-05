import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators'
import { PostCommentsInterface, PostInterface } from '../interfaces/posts.interfaces';

@Injectable()
export class PostsApiService {
    private readonly host = 'https://jsonplaceholder.typicode.com'

    constructor(
        private readonly http: HttpClient
    ) {
    }

    getAll$(): Observable<PostInterface[]> {
        return this.http.get<PostInterface[]>(`${this.host}/posts`).pipe(
            map(posts => posts.filter((_, index) => index % 12 === 0)),
        )
    }

    getById$(id: PostInterface['id']): Observable<PostInterface> {
        return this.http.get<PostInterface>(`${this.host}/posts/${id}`)
    }

    getCommentsById$(id: PostInterface['id']): Observable<PostCommentsInterface[]> {
        return this.http.get<PostCommentsInterface[]>(`${this.host}/posts/${id}/comments`)
    }

    delete$(id: PostInterface['id']): Observable<void> {
        return this.http.delete<void>(`${this.host}/posts/${id}`)
    }
}
