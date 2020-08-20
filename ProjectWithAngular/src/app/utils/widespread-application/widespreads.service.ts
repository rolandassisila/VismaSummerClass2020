import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from './../post-rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class WidespreadsService {

  myFormBuilder = this.fb.group({
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

  }
