import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Post } from '../../utils/formcontent';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '../../form/form.component';
import { Router } from '@angular/router';
import { todaysDate } from '../../utils/helpers';

@Component({
  selector: 'app-postedittemplate',
  templateUrl: './postedittemplate.component.html',
  styleUrls: ['./postedittemplate.component.css']
})
export class PostedittemplateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private formComponent: FormComponent,
    private router: Router) { }

  private post: Post;
  private id = this.activatedRoute.snapshot.params['id'];
  editPost = this.fb.group({
    title: ['', 
      Validators.required
    ],
    content: ['', 
      Validators.required
    ],
    author: ['',
      Validators.required
    ],
    tags: ['',
      Validators.required
    ],
    date: ['',
      Validators.required
    ],
  });

  ngOnInit() {
    this.formComponent.getPost(this.id).subscribe((data: Post) => {
      this.post = data;
      this.editPost.patchValue({
        title: this.post.title,
        content: this.post.content,
        author: this.post.author
      })
    })
  }

  deletePost(){
    this.formComponent.deletePost(this.id).subscribe(data => {
      this.router.navigate(['/home']);
    })
  }

  updatePost() {
    const editedPost: Post = {
      title: this.editPost.controls.title.value,
      content: this.editPost.controls.content.value,
      author: this.editPost.controls.author.value,
      date: todaysDate,
      tags: this.editPost.controls.tags.value,
      id: this.post.id
    };

    this.formComponent.updatePost(this.id, editedPost).subscribe(data => {
      this.router.navigate(['/home']);
    })
  }
}
