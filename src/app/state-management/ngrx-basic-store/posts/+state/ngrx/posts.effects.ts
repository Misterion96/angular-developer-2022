import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TuiAlertService } from '@taiga-ui/core';
import { exhaustMap, map, of, switchMap } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { LoaderService } from '../../../../../core/loader/loader.service';
import { PostsApiService } from '../../services/posts-api.service';
import { actionsPosts } from './posts.actions';

@Injectable()
export class PostsEffects {
    constructor(
        private readonly actions$: Actions,
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
        private readonly apiPosts: PostsApiService,
        private readonly loader: LoaderService,
    ) {
    }

    public loadingOn$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actionsPosts.load, actionsPosts.postdelete),
            tap(() => this.loader.on()),
        )
    }, {dispatch: false})

    public loadingOff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actionsPosts.loaded, actionsPosts.postdeleted),
            tap(() => this.loader.off())
        )
    }, {dispatch: false})

    public postDeleted$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actionsPosts.postdeleted),
            switchMap(({payload}) => {
                return this.alerts.open(`Post deleted ${payload}`)
            })
        )
    }, {dispatch: false})

    public postsLoading$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actionsPosts.load),
            switchMap(() => {
                return this.apiPosts.getAll$().pipe(
                    map(r => actionsPosts.loaded({payload: r})),
                    catchError(() => of(actionsPosts.loaded({payload: []})))
                )
            }),
        )
    })

    public postDelete$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actionsPosts.postdelete),
            exhaustMap(({payload}) => {
                return this.apiPosts.delete$(payload).pipe(
                    delay(10000),
                    map(() => actionsPosts.postdeleted({payload})),
                )
            })
        )
    })
}
