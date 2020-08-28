import { Injectable } from '@angular/core';
import { DATABASE_URL } from '../../utils/url';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Post } from '../post.interface';

import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private DatabaseURL = DATABASE_URL;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}
  private log(message: string) {
    console.log(`New.`);
  }
  // private handleError(error: HttpResponse<Error>) {
  //   return throwError(error);
  // }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.DatabaseURL);
  }

  public getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.DatabaseURL + `/${id}`);
  }

  public addPost(post: Post): Observable<Post> {
    return this.httpClient
      .post<Post>(this.DatabaseURL, post, this.options)
      .pipe(tap((newPost: Post) => this.log(`added post w/ id=${newPost.id}`)));
  }

  public updatePost(post: Partial<Post>): Observable<any> {
    return this.httpClient.patch<Post>(
      `${this.DatabaseURL}/${post.id}`,
      post,
      this.options
    );
  }

  public deletePost(id: number): Observable<Post> {
    return this.httpClient.delete<Post>(this.DatabaseURL + `/${id}`);
  }

  // public createPost(post): Observable<Post> {
  //   return this.httpClient.post<Post>(this.DatabaseURL, JSON.stringify(post), this.options)
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }

  //   public deletePost(payload: number){
  //   return this.httpClient.delete<Post>(this.DatabaseURL + `/${payload}`, this.options)
  //     .pipe(
  //       catchError(this.handleError)
  //       )
  // }

  // public updatePost(id, post): Observable<Post> {
  //   return this.httpClient.put<Post>(this.DatabaseURL + `/${id}`, JSON.stringify(post), this.options)
  //     .pipe(
  //       catchError(this.handleError)
  //       )
  // }

  // public updatePost(post: Post): Observable<Post> {
  //   return this.httpClient.patch<Post>(this.DatabaseURL + `/${post.id}`, post
  //   );
  // }
}
