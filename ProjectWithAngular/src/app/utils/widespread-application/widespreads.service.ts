import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { RestService } from './../post-rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class WidespreadsService {

  myForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    author: ['', Validators.required],
    tags: this.fb.array([])
  });

  constructor(
    public fb: FormBuilder,
    public rest: RestService,
    public router: Router
    ) {  }

  getCheckedtags(e) {
    const tagsArray: FormArray = this.myForm.get('tags') as FormArray;

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