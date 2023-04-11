import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { selectRouteParam } from '../../../../../+state/serializer';
import { PostsRoutesParams } from '../../posts-routes';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-page-post-id',
    templateUrl: './page-post-id.component.html',
    styleUrls: ['./page-post-id.component.less']
})
export class PagePostIdComponent {
    private readonly postId$ = this.store.select(
        selectRouteParam(PostsRoutesParams.ID)
    ).pipe(
        map(id => parseInt(id)),
        shareReplay({bufferSize: 1, refCount: true})
    );

    public readonly post$ = this.postId$.pipe(
        switchMap(id => this.postsService.getPostById$(id))
    )

    public readonly comments$ = this.postId$.pipe(
        switchMap(id => this.postsService.getPostComments$(id))
    )

    public readonly image$ = this.postId$.pipe(
        switchMap(id => this.postsService.getPostImage$(id))
    )

    constructor(
        private readonly postsService: PostsService,
        private readonly store: Store
    ) {
    }
}
