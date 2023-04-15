import { Injectable } from '@angular/core';
import { Action, Select, State, StateContext } from '@ngxs/store';
import { switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../../../../../core/loader/loader.service';
import { PostInterface } from '../../interfaces/posts.interfaces';
import { PostsApiService } from '../../services/posts-api.service';

export interface PostsStateInterface {
    posts: PostInterface[]
}

function createActionName(name: string): string {
    return `[Posts] ${name}`
}

export namespace ActionPosts {
    export class Load {
        static type = createActionName('load')

        constructor() {
        }
    }

    export class Loaded {
        static type = createActionName('loaded')

        constructor(
            public payload: PostInterface[]
        ) {
        }
    }

    export class Delete {
        static type = createActionName('Delete')

        constructor(
            public payload: PostInterface['id']
        ) {
        }
    }

    // export class Deleted {
    //     static type = createActionName('Deleted')
    //
    //     constructor(
    //         public payload: PostInterface['id']
    //     ) {
    //     }
    // }
}


@State<PostsStateInterface>({
    name: 'postsState',
    defaults: {
        posts: []
    }
})
@Injectable()
export class NgxsPostsState {

    constructor(
        private readonly apiPosts: PostsApiService,
    ) {
    }

    @Action(ActionPosts.Loaded)
    public loaded(
        ctx: StateContext<PostsStateInterface>,
        {
            payload
        }: ActionPosts.Loaded
    ): void {
        ctx.setState(state => {
            return {
                ...state,
                posts: payload
            }
        })
    }

    @Action(ActionPosts.Load)
    onLoad(
        ctx: StateContext<PostsStateInterface>,
    ): any {
        return this.apiPosts.getAll$().pipe(
            switchMap(r => ctx.dispatch(
                new ActionPosts.Loaded(r)
            ))
        )
    }

    @Action(ActionPosts.Delete)
    onDelete(
        ctx: StateContext<PostsStateInterface>,
        {
            payload
        }: ActionPosts.Delete
    ): any {
        return this.apiPosts.delete$(payload).pipe(
            tap(() => {
                ctx.setState(state => {
                    return {
                        ...state,
                        posts: state.posts.filter(post => post.id !== payload)
                    }
                })
            }
        )
        )
    }

    @Select()
    static posts(state: {postsState: PostsStateInterface}): () => PostsStateInterface['posts'] {
        return () => state.postsState.posts
    }
}
