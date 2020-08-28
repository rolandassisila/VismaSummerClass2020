import { createSelector, createFeatureSelector } from '@ngrx/store';

import {
  PostState,
  postAdapter,
  postStateFeatureKey,
} from './../app-state/post.state';

export const selectPostsFeature = createFeatureSelector<PostState>(
  postStateFeatureKey
);

export const selectPosts = createSelector(
  selectPostsFeature,
  postAdapter.getSelectors().selectAll
);
export const selectedPost = createSelector(
  selectPostsFeature,
  (state: PostState) => state.selectedPost
);

export const selectError = createSelector(
  selectPostsFeature,
  (state: PostState) => state.error
);
