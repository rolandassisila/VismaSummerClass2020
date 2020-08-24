import * as postActions from "../state/post.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Post } from '../utils/post.interface'
import * as fromRoot from "../../app/app-state/app-state";

export interface PostState extends EntityState<Post> {
  selectedPostId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
    posts: PostState;
  }

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const defaultPost: PostState = {
    ids: [],
    entities: {},
    selectedPostId: null,
    loading: false,
    loaded: false,
    error: ""
  };

  export const initialState = postAdapter.getInitialState(defaultPost);

  export function postReducer(
    state = initialState,
    action: postActions.Actions
  ): PostState {
    switch (action.type) {
    //   case postActions.PostActionTypes.LOAD_POSTS_SUCCESS: {
    //     return postAdapter.addAll(action.payload, {
    //       ...state,
    //       loading: false,
    //       loaded: true
    //     });
    //   }
      case postActions.PostActionTypes.LOAD_POSTS_FAIL: {
        return {
          ...state,
          entities: {},
          loading: false,
          loaded: false,
          error: action.payload
        };
      }
  
    //   case postActions.PostActionTypes.LOAD_POST_SUCCESS: {
    //     return postAdapter.addOne(action.payload, {
    //       ...state,
    //       selectedPostId: action.payload.id
    //     });
    //   }
      case postActions.PostActionTypes.LOAD_POST_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      case postActions.PostActionTypes.ADD_POST_SUCCESS: {
        return postAdapter.addOne(action.payload, state);
      }
      case postActions.PostActionTypes.ADD_POST_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      case postActions.PostActionTypes.UPDATE_POST_SUCCESS: {
        return postAdapter.updateOne(action.payload, state);
      }
      case postActions.PostActionTypes.UPDATE_POST_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      case postActions.PostActionTypes.DELETE_POST_SUCCESS: {
        return postAdapter.removeOne(action.payload, state);
      }
      case postActions.PostActionTypes.DELETE_POST_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      default: {
        return state;
      }
    }
  }

  const getPostFeatureState = createFeatureSelector<PostState>(
    "posts"
  );
  
  export const getPosts = createSelector(
    getPostFeatureState,
    postAdapter.getSelectors().selectAll
  );
  
  export const getPostsLoading = createSelector(
    getPostFeatureState,
    (state: PostState) => state.loading
  );
  
  export const getPostsLoaded = createSelector(
    getPostFeatureState,
    (state: PostState) => state.loaded
  );
  
  export const getError = createSelector(
    getPostFeatureState,
    (state: PostState) => state.error
  );
  
  export const getCurrentPostId = createSelector(
    getPostFeatureState,
    (state: PostState) => state.selectedPostId
  );
  export const getCurrentPost = createSelector(
    getPostFeatureState,
    getCurrentPostId,
    state => state.entities[state.selectedPostId]
  );
  
