import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { TuiForModule, TuiLetModule, TuiMapperPipeModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLinkModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiIslandModule, TuiLineClampModule } from '@taiga-ui/kit';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PostComponent } from './components/post/post.component';
import { PagePostIdComponent } from './pages/page-post-id/page-post-id.component';
import { PagePostsComponent } from './pages/page-posts/page-posts.component';
import { PostsRoutes, PostsRoutesParams } from './posts-routes';
import { ImagesService } from './services/images.service';
import { PostsApiService } from './services/posts-api.service';
import { PostsService } from './services/posts.service';

class DelayResolver implements Resolve<null> {
    public resolve(): Observable<null> | Promise<null> | null {
        return of(null).pipe(
            delay(3000)
        );
    }

}
const routes: Routes = [
    {
        path: PostsRoutes.MAIN,
        component: PagePostsComponent
    },
    {
        path: `:${PostsRoutesParams.ID}`,
        component: PagePostIdComponent,
        resolve: {
            delay: DelayResolver
        },
        data: {
            content: 'Loading post page...'
        }
    }
]

const PAGES = [
    PagePostsComponent,
    PagePostIdComponent
]
const COMPONENTS = [
    PostComponent
]

@NgModule({
    declarations: [
        ...PAGES,
        ...COMPONENTS
    ],
    imports: [
        RouterModule.forChild(routes),
        TuiForModule,
        NgForOf,
        TuiIslandModule,
        TuiLinkModule,
        TuiLineClampModule,
        TuiMapperPipeModule,
        AsyncPipe,
        HttpClientModule,
        NgIf,
        JsonPipe,
        TuiButtonModule,
        TuiLoaderModule,
        TuiLetModule
    ],
    providers: [
        PostsService,
        PostsApiService,
        ImagesService,
        DelayResolver
    ]
})
export class PostsModule {
}
