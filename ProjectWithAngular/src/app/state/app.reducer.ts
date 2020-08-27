import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../app-state/app-state';
import { postReducer } from './post.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  posts: postReducer,
};
