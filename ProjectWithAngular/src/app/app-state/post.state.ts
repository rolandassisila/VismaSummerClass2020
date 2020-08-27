import { Post } from '../utils/post.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface PostState extends EntityState<Post> {
  selectedPost: Post;
  error: string;
}
export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const defaultPost: PostState = {
  ids: [],
  entities: {},
  selectedPost: null,
  error: '',
};

export const initialPostState = postAdapter.getInitialState(defaultPost);

export const postStateFeatureKey = 'postState';
