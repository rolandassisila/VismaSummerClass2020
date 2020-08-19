import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../utils/formcontent';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  editForm() {
    this.router.navigateByUrl(`/edit/${this.post.id}`);
  }

}
