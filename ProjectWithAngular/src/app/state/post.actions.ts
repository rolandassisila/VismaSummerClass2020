import { Update } from "@ngrx/entity";
import { createAction, props } from '@ngrx/store'
import { Post } from '../utils/post.interface'

export const GetPosts = createAction('[Posts Component] Get Posts');

export const GetPostsSuccess = createAction(
  '[Posts Effect] Get Posts Success',
  props<{ posts: Post[] }>()
);
export const GetPostsFail = createAction(
  '[Posts Effect] Get Posts Fail',
  props<{ error: any }>()
);


export const GetPost = createAction(
  '[PostForm Component] Get Post',
  props<{ id: number }>()
);
export const GetPostSuccess = createAction(
  '[PostForm Effect] Get Post Success',
  props<{ selectedPost: Post }>()
);
export const GetPostFail = createAction(
  '[PostForm Effect] Get Post Fail',
  props<{ error: any }>()
);


export const CreatePost = createAction(
  '[PostForm Component] Create Post',
  props<{ post: Post }>()
);
export const CreatePostSuccess = createAction(
  '[PostForm Effect] Create Post Success',
  props<{ post: Post }>()
);
export const CreatePostFail = createAction(
  '[PostForm Effect] Create Post Fail',
  props<{ error: any }>()
);


export const UpdatePost = createAction(
  '[PostForm Component] Update Post',
  props<{ post: Update<Post> }>()
);


export const DeletePost = createAction(
  '[PostForm Component] Delete Post',
  props<{ id: number }>()
);

export const DeletePostSuccess = createAction(
  '[PostForm Component] Delete Post Success',
  props<{ id: number }>()
);

export const DeletePostFail = createAction(
  '[PostForm Component] Delete Post Fail',
  props<{ error: any }>()
);
