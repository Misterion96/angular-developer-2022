import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsPostsState } from './index';

@NgModule({
    imports: [
        NgxsModule.forFeature([NgxsPostsState])
    ]
})
export class PostsNgxsModule {}
