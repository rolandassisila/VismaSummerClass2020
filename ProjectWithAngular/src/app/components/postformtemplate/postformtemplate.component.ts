import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Post } from '../../utils/formcontent';
import { Router } from '@angular/router';
import { FormComponent } from '../../form/form.component';
import { todaysDate } from '../../utils/helpers';



@Component({
  selector: 'app-postformtemplate',
  templateUrl: './postformtemplate.component.html',
  styleUrls: ['./postformtemplate.component.scss']
})
export class PostFormtemplateComponent implements OnInit {
  
  tags: Array<any> = [
    {name: 'Work', value: 'Work' },
    {name: 'Leisure', value: 'Leisure' },
    {name: 'Holiday', value: 'Holiday' }
  ];

  ngOnInit() {
  }

 myForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    author: ['', Validators.required],
    tags: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    public formComponent: FormComponent,
    private router: Router
    ) {  }

    onCheckboxChange(e) {
      const tagsArray: FormArray = this.myForm.get('tags') as FormArray;
    
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

  onSubmit() {
    const post: Post = {
      title: this.myForm.controls.title.value,
      content: this.myForm.controls.content.value,
      author: this.myForm.controls.author.value,
      date: todaysDate,
      tags: this.myForm.controls.tags.value,
      id: null
    };
  

      this.formComponent.createPost(post).subscribe(res => {
        this.router.navigateByUrl("/");
    })
  }
}
