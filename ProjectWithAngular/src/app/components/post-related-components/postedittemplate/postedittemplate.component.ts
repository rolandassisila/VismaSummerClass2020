import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  Form,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Post } from '../../../utils/post.interface';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../../utils/post-rest/rest.service';
import { Router } from '@angular/router';
import { todaysDate } from '../../../utils/helpers';
import { AppState } from './../../../app-state/app-state';
import * as postActions from './../../../store/post.actions';
import * as fromPostSelectors from './../../../store/post.selector';
import * as fromPost from './../../../store/post.reducer';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-postedittemplate',
  templateUrl: './postedittemplate.component.html',
  styleUrls: ['./postedittemplate.component.scss'],
})
export class PostedittemplateComponent implements OnInit {
  tags: Array<any> = [
    { name: 'Work', value: 'Work' },
    { name: 'Leisure', value: 'Leisure' },
    { name: 'Holiday', value: 'Holiday' },
  ];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private rest: RestService,
    private router: Router,
    private store: Store<AppState>,
    private actions$: Actions
  ) {}

  public post: Post;
  private id = this.activatedRoute.snapshot.params['id'];
  public postForm: FormGroup;

  ngOnInit() {
    this.postForm = this.generateForm();
    this.store.dispatch(postActions.GetPost({ id: this.id }));
    const post$: Observable<Post> = this.store.select(
      fromPostSelectors.selectedPost
    );

    this.actions$
      .pipe(ofType(postActions.GetPostSuccess), take(1))
      .subscribe(({ selectedPost }) => {
        this.fillForm(selectedPost);
      });
  }

  private generateForm(): FormGroup {
    return this.fb.group({
      author: this.fb.control('', Validators.required),
      title: this.fb.control('', Validators.required),
      content: this.fb.control('', Validators.required),
      tags: this.fb.array([]),
    });
  }

  private fillForm(post: Post): void {
    const tags: FormArray = this.postForm.get('tags') as FormArray;
    post.tags.forEach((singletag) => {
      tags.push(new FormControl(singletag));
    });
    this.postForm.get('author').setValue(post.author);
    this.postForm.get('title').setValue(post.title);
    this.postForm.get('content').setValue(post.content);
  }

  public deletePost(): void {
    if (confirm('Are You Sure You want to Delete the Post?')) {
      let id: number = this.id;
      this.store.dispatch(postActions.DeletePost({ id }));
      this.actions$
        .pipe(ofType(postActions.DeletePostSuccess), take(1))
        .subscribe(() => this.router.navigate(['/home']));
    }
  }

  public updatePost(): void {
    const updatedPost: Update<Post> = {
      id: this.id,
      changes: this.changedPost(),
    };
    this.store.dispatch(postActions.UpdatePost({ post: updatedPost }));
    this.router.navigate(['/home']);
  }

  private changedPost(): Post {
    return {
      title: this.postForm.controls.title.value,
      content: this.postForm.controls.content.value,
      author: this.postForm.controls.author.value,
      date: todaysDate,
      tags: this.postForm.controls.tags.value,
      id: this.id,
    };
  }

  onCheckboxChange(e) {
    const tagsArray: FormArray = this.postForm.get('tags') as FormArray;
    if (e.target.checked) {
      tagsArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      tagsArray.controls.forEach((item: FormControl, index: number) => {
        if (item.value == e.target.value) {
          tagsArray.removeAt(index);
          return;
        }
      });
    }
  }
}
