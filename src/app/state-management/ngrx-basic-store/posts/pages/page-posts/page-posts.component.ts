import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { LoadingService } from '../../../../../services/loading.service';
import { PostInterface } from '../../interfaces/posts.interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
      LoadingService
  ]
})
export class PagePostsComponent {
  public posts$ = this.loadingService.showLoaderUntilCompleted(this.postsService.getAllPosts$())
  public readonly loading$ = this.loadingService.loading$

  constructor(
      private readonly postsService: PostsService,
      private readonly loadingService: LoadingService
  ) {
  }

  public getImage$ = (id: PostInterface['id']) => this.postsService.getPostImage$(id);

  public trackPost(_: number, post: PostInterface): string {
    return `${post.title}__${post.id}`
  }

  public onDeletePost($event: number): void {
    const request = this.postsService.deletePost$($event)
    this.loadingService.showLoaderUntilCompleted(request).pipe(
        take(1)
    ).subscribe()
  }
}
