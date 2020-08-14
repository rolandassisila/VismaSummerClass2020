import { Component } from '@angular/core';
import { DATABASE_URL, SELECTED_POST_ID } from '../utils/url';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { Post } from '../utils/formcontent';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  
  private DatabaseURL = DATABASE_URL;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {}
  
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.DatabaseURL)
    .pipe(
      catchError(this.handleError)
    )
  }



  createPost(post): Observable<Post> {
    return this.httpClient.post<Post>(this.DatabaseURL, JSON.stringify(post), this.options)
    .pipe(
      catchError(this.handleError)
    )
  } 

  private handleError(error: HttpResponse<Error>) {
    return throwError(error);
}
}
