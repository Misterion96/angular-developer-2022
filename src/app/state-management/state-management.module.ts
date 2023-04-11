import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsModule } from './ngrx-basic-store/posts';
import { postsFeature } from './ngrx-basic-store/posts/+state';
import { PostsEffects } from './ngrx-basic-store/posts/+state/posts-effects';

@NgModule({
    imports: [
        PostsModule,
        StoreModule.forFeature(postsFeature),
        EffectsModule.forFeature([PostsEffects])
    ]
})
export class StateManagementModule {}
