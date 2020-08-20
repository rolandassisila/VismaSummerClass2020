import { Component, OnInit } from '@angular/core';
import { Post } from '../../../utils/formcontent'
import { RestService } from '../../../utils/post-rest/rest.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllpostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
  })
  }

}


