import { NgModule } from '@angular/core';
import { PostsCustomStore, PostsCustomStoreFacade } from './index';

@NgModule({
    providers: [
        PostsCustomStore,
        PostsCustomStoreFacade
    ]
})
export class CustomStoreModule {}
