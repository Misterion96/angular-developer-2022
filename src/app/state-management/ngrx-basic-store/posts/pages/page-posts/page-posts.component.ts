import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { LoadingService } from '../../../../../services/loading.service';
import { PostInterface } from '../../interfaces/posts.interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePostsComponent implements OnInit {
  public readonly posts$ = this.postsService.posts$
  public readonly loading$ = this.postsService.loading$

  constructor(
      private readonly postsService: PostsService,
  ) {
  }

  public ngOnInit(): void {
    this.postsService.getAllPosts$()
  }

  public getImage$ = (id: PostInterface['id']) => this.postsService.getPostImage$(id);

  public trackPost(_: number, post: PostInterface): string {
    return `${post.title}__${post.id}`
  }

  public onDeletePost($event: number): void {
    this.postsService.deletePost$($event)
  }
}
