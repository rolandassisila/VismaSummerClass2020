import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../utils/post.interface';
import { Router } from '@angular/router';

import * as postActions from './../../../state/post.actions';
import * as fromPost from './../../../state/post.reducer';
import { Store} from "@ngrx/store";
import { AppState } from './../../../app-state/app-state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  constructor( private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
  }


  editForm (post: Post) {
    this.store.dispatch(postActions.GetPost({id: post.id}));
    this.router.navigateByUrl(`/edit/${this.post.id}`);
  }
}
