import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from '../../interfaces/posts.interfaces';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent {
  @Input() post!: PostInterface
  @Input() image: string
  constructor(
      public readonly activatedRoute: ActivatedRoute,
  ) { }

  @Output()
  public readonly delete = new EventEmitter<number>()

  public onDelete(id: number): void {
    this.delete.emit(id)
  }
}
