import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  posts: Observable<Post[]>;
  newPost: Observable<Post[]>;

  constructor(private http: HttpClient) {}
  
  getPosts() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts')

  }

  createPost() {
    const data: Post = {
      id: null,
      title: 'New Post',
      body: 'Hello World!'
    }

    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
  }


}
