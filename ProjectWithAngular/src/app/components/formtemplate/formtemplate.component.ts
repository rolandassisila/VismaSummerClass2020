import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATABASE_URL, SELECTED_POST_ID } from "../../utils/url";
// import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {

  myForm: FormGroup;

  //Form state
  loading = false;
  success = false; 

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', [
        Validators.required
      ]],
      content: ['', [
        Validators.required
      ]],
      author: ['', [
        Validators.required
      ]],
      tags: ['', [
        Validators.required
      ]],
      date: ['', [
        Validators.required
      ]],
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  // async submitHandler() {
  //   this.loading = true;

  //   const formValue = this.myForm.value;

  //   try {
  //     await
  //   }
  // }

}
