import { Component, OnInit } from '@angular/core';
import { Post } from '../../../utils/post.interface';
import { RestService } from '../../../utils/post-rest/rest.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './../../../app-state/app-state';
import * as postActions from './../../../store/post.actions';
import * as fromPostSelectors from './../../../store/post.selector';
@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss'],
})
export class AllpostsComponent implements OnInit {
  public posts$ = this.store.pipe(select(fromPostSelectors.selectPosts));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(postActions.GetPosts());
  }
}
