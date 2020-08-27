import { RouterReducerState } from '@ngrx/router-store';

import { PostState, initialPostState } from './post.state';

export interface AppState {
  router?: RouterReducerState;
  posts: PostState;
}

export const initialAppState: AppState = {
  posts: initialPostState,
};

export function getInitalState(): AppState {
  return initialAppState;
}
