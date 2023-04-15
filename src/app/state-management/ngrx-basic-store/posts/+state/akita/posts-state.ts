import { Store, StoreConfig } from '@datorama/akita';
import { PostInterface } from '../../interfaces/posts.interfaces';

export interface PostsStateInterface {
    posts: PostInterface[]
}

@StoreConfig({
    name: 'postsState'
})
export class PostsState extends Store<PostsStateInterface> {
    constructor() {
        super({
            posts: []
        });
    }

    public onPostLoaded(posts: PostInterface[]): void {
        this.update(state => {
            return {
                ...state,
                posts
            }
        })
    }

    public onPostDelete(id: PostInterface['id']): void {
        this.update(state => {
            return {
                posts: state.posts.filter(post => post.id !== id)
            }
        })
    }
}
