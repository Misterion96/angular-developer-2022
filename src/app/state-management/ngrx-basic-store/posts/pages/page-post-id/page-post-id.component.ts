import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PostsRoutesParams } from '../../posts-routes';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-page-post-id',
    templateUrl: './page-post-id.component.html',
    styleUrls: ['./page-post-id.component.less']
})
export class PagePostIdComponent {
    constructor(
        private readonly postsService: PostsService,
        private readonly activatedRoute: ActivatedRoute
    ) {
    }

    public readonly post$ = this.activatedRoute.paramMap
        .pipe(
            map(paramMap => paramMap.get(PostsRoutesParams.ID)),
            map(id => parseInt(id)),
            filter<number>(id => !Number.isNaN(id)),
            switchMap(id => {
                return forkJoin([
                    this.postsService.getPostById$(id),
                    this.postsService.getPostComments$(id),
                    this.postsService.getPostImage$(id)
                ])
            }),
            map(([post, comments, image]) => {
                return {
                    post, comments, image
                }
            })
        );
}
