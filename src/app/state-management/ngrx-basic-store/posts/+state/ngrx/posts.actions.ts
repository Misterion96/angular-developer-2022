import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PostInterface } from '../../interfaces/posts.interfaces';

export const actionsPosts = createActionGroup(
    {
        source: 'Posts',
        events: {
            load: emptyProps(),
            loaded: props<{payload: PostInterface[]}>(),
            postDelete: props<{payload: PostInterface['id']}>(),
            postDeleted: props<{payload: PostInterface['id']}>()
        }
    }
)
