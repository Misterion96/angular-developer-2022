import { Inject, Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { LoaderService } from '../../../../../core/loader/loader.service';
import { PostInterface } from '../../interfaces/posts.interfaces';
import { PostsApiService } from '../../services/posts-api.service';

export interface PostsStateInterface {
    posts: PostInterface[]
}

@Injectable()
export class PostsCustomStore extends BehaviorSubject<PostsStateInterface> {
    public readonly posts$ = this.asObservable().pipe(
        map(state => state.posts)
    )

    constructor() {
        super({
            posts: []
        });
    }

    public setPosts(posts: PostInterface[]): void {
        this.next({
            ...this.getValue(),
            posts
        })
    }

    public deletePost(id: PostInterface['id']): void {
        console.log(id)
        const state = this.getValue()
        this.next({
            ...state,
            posts: state.posts.filter(post => post.id !== id)
        })
    }
}

@Injectable()
export class PostsCustomStoreFacade {
    public readonly posts$ = this.store.posts$;

    constructor(
        private readonly store: PostsCustomStore,
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
        private readonly apiPosts: PostsApiService,
    ) {
    }

    public getAll(): void {
        this.apiPosts.getAll$().subscribe(r => this.store.setPosts(r))
    }

    public deletePost(id: PostInterface['id']): void {
        this.apiPosts.delete$(id).pipe(
            switchMap(() => {
                this.store.deletePost(id);
                return this.alerts.open(`Deleted #${id}`)
            })
        ).subscribe()
    }
}
