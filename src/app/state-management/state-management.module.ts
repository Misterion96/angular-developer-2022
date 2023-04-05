import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PostsModule } from './ngrx-basic-store/posts';
import { postsFeature } from './ngrx-basic-store/posts/+state';

@NgModule({
    imports: [
        PostsModule,
        StoreModule.forFeature(postsFeature)
    ]
})
export class StateManagementModule {}
