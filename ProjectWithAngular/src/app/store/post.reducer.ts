import * as postActions from '../store/post.actions';
import { initialPostState, postAdapter } from './../app-state/post.state';
import { createReducer, on } from '@ngrx/store';

export const postReducer = createReducer(
  initialPostState,
  on(postActions.GetPostsSuccess, (state, action) => {
    return postAdapter.addAll(action.posts, state);
  }),
  on(postActions.GetPostsFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(postActions.CreatePostSuccess, (state, action) => {
    return postAdapter.addOne(action.post, state);
  }),
  on(postActions.CreatePostFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(postActions.GetPostSuccess, (state, action) => {
    return {
      ...state,
      selectedPost: action.selectedPost,
    };
  }),
  on(postActions.GetPostFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(postActions.UpdatePost, (state, action) => {
    return postAdapter.updateOne(action.post, state);
  }),
  on(postActions.DeletePostSuccess, (state, action) => {
    return postAdapter.removeOne(action.id, state);
  }),
  on(postActions.DeletePostFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
