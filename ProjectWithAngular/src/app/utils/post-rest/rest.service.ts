import { Injectable } from '@angular/core';
import { DATABASE_URL} from '../../utils/url';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Post } from '../post.interface';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  
  private DatabaseURL = DATABASE_URL;
  // options = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  constructor(private httpClient: HttpClient) {}
  
  private handleError(error: HttpResponse<Error>) {
    return throwError(error);
  }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.DatabaseURL);
  }

  public getPostById(payload: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.DatabaseURL}/${payload}`);
  }

  public createPost(payload: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.DatabaseURL, payload);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.httpClient.patch<Post>(
      `${this.DatabaseURL}/${post.id}`, post );
  }

  public deletePost(payload: number) {
    return this.httpClient.delete(this.DatabaseURL + `/${payload}`);
  }

  public getPost(id): Observable<Post> {
    return this.httpClient.get<Post>(this.DatabaseURL + `/${id}`)
      .pipe(
        catchError(this.handleError)
        )
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
