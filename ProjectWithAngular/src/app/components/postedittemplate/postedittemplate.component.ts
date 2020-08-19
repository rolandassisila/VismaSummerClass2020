import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form, FormControl, FormArray } from '@angular/forms';
import { Post } from '../../utils/formcontent';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '../../form/form.component';
import { Router } from '@angular/router';
import { todaysDate } from '../../utils/helpers';

@Component({
  selector: 'app-postedittemplate',
  templateUrl: './postedittemplate.component.html',
  styleUrls: ['./postedittemplate.component.scss']
})
export class PostedittemplateComponent implements OnInit {

  tags: Array<any> = [
    {name: 'Work', value: 'Work' },
    {name: 'Leisure', value: 'Leisure' },
    {name: 'Holiday', value: 'Holiday' }
  ];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private formComponent: FormComponent,
    private router: Router) { }

  public post: Post;
  private id = this.activatedRoute.snapshot.params['id'];
  editPost = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    author: ['', Validators.required],
    tags: this.fb.array([])
  });

  ngOnInit() {
    this.formComponent.getPost(this.id).subscribe((data: Post) => {
      this.post = data;
      this.editPost.patchValue({
        title: this.post.title,
        content: this.post.content,
        author: this.post.author,
      });
      const tags: FormArray = this.editPost.get('tags') as FormArray;
        this.post.tags.forEach((singletag) => {
          tags.push(new FormControl(singletag));
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
  onCheckboxChange(e) {
    const tagsArray: FormArray = this.editPost.get('tags') as FormArray;
  
    if (e.target.checked) {
      tagsArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      tagsArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          tagsArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
