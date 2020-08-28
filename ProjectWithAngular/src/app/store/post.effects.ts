import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from './../utils/post-rest/rest.service';
import * as postActions from '../store/post.actions';
import { Post } from '../utils/post.interface';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private restService: RestService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.GetPosts),
      mergeMap(() =>
        this.restService.getPosts().pipe(
          map((posts: Post[]) => postActions.GetPostsSuccess({ posts })),
          catchError((error) => of(postActions.GetPostsFail({ error })))
        )
      )
    )
  );

  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.GetPost),
      mergeMap((action) =>
        this.restService.getPost(action.id).pipe(
          map((post: Post) =>
            postActions.GetPostSuccess({
              selectedPost: post,
            })
          ),
          catchError((error) => of(postActions.GetPostFail({ error })))
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.CreatePost),
      mergeMap((action) =>
        this.restService.addPost(action.post).pipe(
          map((post: Post) => postActions.CreatePostSuccess({ post })),
          catchError((error) => of(postActions.CreatePostFail({ error })))
        )
      ),
      tap(() => this.router.navigateByUrl('/'))
    )
  );

  updatePost$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(postActions.UpdatePost),
        concatMap((action) => this.restService.updatePost(action.post.changes)),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.DeletePost),
      mergeMap((action) =>
        this.restService.deletePost(action.id).pipe(
          map(() => postActions.DeletePostSuccess({ id: action.id })),
          catchError((error) => of(postActions.DeletePostFail({ error })))
        )
      ),
      tap(() => this.router.navigateByUrl('/'))
    )
  );
}
