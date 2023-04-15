import { NgModule } from '@angular/core';
import { PostsAkitaFacade } from './posts-akita.facade';
import { PostsQuery } from './posts-query';
import { PostsState } from './posts-state';

@NgModule({
    providers: [
        PostsQuery,
        PostsState,
        PostsAkitaFacade,
    ]
})
export class PostsAkitaModule {}
