import { Inject, Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { LoaderService } from '../../../../../core/loader/loader.service';
import { PostInterface } from '../../interfaces/posts.interfaces';
import { PostsApiService } from '../../services/posts-api.service';
import { PostsQuery } from './posts-query';
import { PostsState } from './posts-state';

@Injectable()
export class PostsAkitaFacade {
    public readonly posts$ = this.postsQuery.posts$;

    constructor(
        private readonly postsState: PostsState,
        private readonly postsQuery: PostsQuery,
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
        private readonly apiPosts: PostsApiService,
        private readonly loader: LoaderService,
    ) {
    }

    public getAll(): void {
        this.loader.on();

        this.apiPosts.getAll$().pipe(
            tap(posts => this.postsState.onPostLoaded(posts))
        ).subscribe(
            () => this.loader.off(),
            error => this.loader.off()
        )
    }

    public delete(id: PostInterface['id']): void {
        this.loader.on();

        this.apiPosts.delete$(id).pipe(
            tap(() => this.postsState.onPostDelete(id)),
            switchMap(() => {
                this.loader.off()
                return this.alerts.open(`Post deleted ${id}`)
            }),
            catchError(e => {
                this.loader.off()
                return this.alerts.open(e, {
                    status: TuiNotification.Error
                })
            })
        ).subscribe()
    }


}
