import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../utils/formcontent';
import { Router } from '@angular/router';
import { FormComponent } from '../../form/form.component';
import { todaysDate } from '../../utils/helpers';



@Component({
  selector: 'app-postformtemplate',
  templateUrl: './postformtemplate.component.html',
  styleUrls: ['./postformtemplate.component.css']
})
export class PostFormtemplateComponent implements OnInit {
  
  ngOnInit() {
  }

 myForm = this.fb.group({
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
  })

  constructor(
    private fb: FormBuilder,
    public formComponent: FormComponent,
    private router: Router
    ) {  }

  onSubmit() {
    const post: Post = {
      title: this.myForm.controls.title.value,
      content: this.myForm.controls.content.value,
      author: this.myForm.controls.content.value,
      date: todaysDate,
      tags: [],
      id: null
    };
  

      this.formComponent.createPost(post).subscribe(res => {
        this.router.navigateByUrl("/");
    })
  }
}
