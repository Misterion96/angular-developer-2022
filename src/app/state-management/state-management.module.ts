import { NgModule } from '@angular/core';
import { PostsModule } from './ngrx-basic-store/posts';
import { PostsAkitaModule } from './ngrx-basic-store/posts/+state/akita/posts-akita.module';
import { CustomStoreModule } from './ngrx-basic-store/posts/+state/custom-store/custom-store.module';
import { PostsNgxsModule } from './ngrx-basic-store/posts/+state/ngxs/posts-ngxs.module';

@NgModule({
    imports: [
        PostsModule,
        CustomStoreModule
        // PostsAkitaModule
        // PostsNgxsModule,
    ]
})
export class StateManagementModule {}
