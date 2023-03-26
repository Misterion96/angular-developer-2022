import { NgModule } from '@angular/core';
import { PostsModule } from './ngrx-basic-store/posts';

@NgModule({
    imports: [
        PostsModule
    ]
})
export class StateManagementModule {}
