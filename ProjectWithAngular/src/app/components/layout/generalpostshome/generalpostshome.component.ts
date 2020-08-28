import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalpostshome',
  templateUrl: './generalpostshome.component.html',
  styleUrls: ['./generalpostshome.component.scss'],
})
export class GeneralpostshomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  latestposts: any[] = [
    {
      name: 'Post1',
      imgsrc: 'assets/images/city-1.jpg',
      alt: '#',
      topic: 'Lorem Ipsum',
      postdate: '21 July, 2020',
    },
    {
      name: 'Post1',
      imgsrc: 'assets/images/city-1.jpg',
      alt: '#',
      topic: 'Lorem Ipsum',
      postdate: '21 July, 2020',
    },
    {
      name: 'Post1',
      imgsrc: 'assets/images/city-1.jpg',
      alt: '#',
      topic: 'Lorem Ipsum',
      postdate: '21 July, 2020',
    },
  ];
}
