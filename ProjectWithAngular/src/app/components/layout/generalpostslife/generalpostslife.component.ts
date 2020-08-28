import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalpostslife',
  templateUrl: './generalpostslife.component.html',
  styleUrls: ['./generalpostslife.component.scss'],
})
export class GeneralpostslifeComponent implements OnInit {
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
      name: 'Post2',
      imgsrc: 'assets/images/city-1.jpg',
      alt: '#',
      topic: 'Lorem Ipsum',
      postdate: '21 July, 2020',
    },
    {
      name: 'Post3',
      imgsrc: 'assets/images/city-1.jpg',
      alt: '#',
      topic: 'Lorem Ipsum',
      postdate: '21 July, 2020',
    },
  ];

  lifeposts: any[] = [
    {
      name: 'LifePost1',
      imgsrc: 'assets/images/city-3.jpg',
      alt: '#',
      topic:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      postdate: '21 July, 2020',
    },
  ];

  lifeposttags: any[] = [
    { name: 'Lorem', value: 'Lorem' },
    { name: 'Lorem', value: 'Lorem' },
    { name: 'Lorem', value: 'Lorem' },
  ];
}
