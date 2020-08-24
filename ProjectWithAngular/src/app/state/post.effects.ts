import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

import { RestService } from "./../utils/post-rest/rest.service";
import * as postActions from "../state/post.actions";
import { Post } from '../utils/post.interface'


@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private restService: RestService,
    private httpClient: HttpClient
  ) {}

  public handleError(error: HttpResponse<Error>) {
    return throwError(error);
  }

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType<postActions.LoadPosts>(
      postActions.PostActionTypes.LOAD_POSTS
    ),
    mergeMap((action: postActions.LoadPosts) =>
      this.restService.getPosts().pipe(
        map(
          (posts: Post[]) =>
            new postActions.LoadPostsSuccess(posts)
        ),
        catchError(err => of(new postActions.LoadPostsFail(err)))
      )
    )
  );


  @Effect()
  loadPost$: Observable<Action> = this.actions$.pipe(
    ofType<postActions.LoadPost>(
      postActions.PostActionTypes.LOAD_POST
    ),
    mergeMap((action: postActions.LoadPost) =>
      this.restService.getPostById(action.payload).pipe(
        map(
          (post: Post) =>
            new postActions.LoadPostSuccess(post)
        ),
        catchError(err => of(new postActions.LoadPostFail(err)))
      )
    )
  );

  @Effect()
  addPost$: Observable<Action> = this.actions$.pipe(
    ofType<postActions.AddPost>(
      postActions.PostActionTypes.ADD_POST
    ),
    map((action: postActions.AddPost) => action.payload),
    mergeMap((post: Post) =>
      this.restService.createPost(post).pipe(
        map(
          (newPost: Post) =>
            new postActions.AddPostSuccess(newPost)
        ),
        catchError(err => of(new postActions.AddPostFail(err)))
      )
    )
  );


  @Effect()
  updatePost$: Observable<Action> = this.actions$.pipe(
    ofType<postActions.UpdatePost>(
      postActions.PostActionTypes.UPDATE_POST
    ),
    map((action: postActions.UpdatePost) => action.payload),
    mergeMap((post: Post) =>
    this.restService.updatePost(post).pipe(
      map(
        (updatePost: Post) =>
          new postActions.UpdatePostSuccess({
            id: updatePost.id,
            changes: updatePost
          })
      ),
      catchError(err => of(new postActions.UpdatePostFail(err)))
  )
)
);

  @Effect()
  deletePost$: Observable<any> = this.actions$.pipe(
    ofType<postActions.DeletePost>(
      postActions.PostActionTypes.DELETE_POST
    ),
    map((action: postActions.DeletePost) => action.payload),
    mergeMap((id: number) =>
      this.restService.deletePost(id).pipe(
        map(() => new postActions.DeletePostSuccess(id)),
        catchError(err => of(new postActions.DeletePostFail(err)))
      )
    )
  );
}
