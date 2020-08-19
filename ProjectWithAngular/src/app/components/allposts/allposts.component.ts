import { Component, OnInit } from '@angular/core';
import { Post } from '../../utils/formcontent'
import { FormComponent } from '../../form/form.component';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllpostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(public formComponent: FormComponent) { }

  ngOnInit() {
    this.formComponent.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
  })
  }

}


