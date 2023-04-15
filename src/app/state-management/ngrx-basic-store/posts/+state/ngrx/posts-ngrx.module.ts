import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsEffects } from './posts.effects';
import { postsFeature } from './posts.feature';

@NgModule({
    imports: [
        StoreModule.forFeature(postsFeature),
        EffectsModule.forFeature([PostsEffects])
    ]
})
export class PostsNgrxModule {
}
