import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holidayposts',
  templateUrl: './holidayposts.component.html',
  styleUrls: ['./holidayposts.component.scss']
})
export class HolidaypostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  holidayposts: any[] = [
    {name: "Post1", imgsrc:"assets/images/city-1.jpg", alt:"#", imagetext:"Lorem Ipsum", postdate:"21 July, 2020"},
    {name: "Post2", imgsrc:"assets/images/city-2.jpg", alt:"#", imagetext:"Lorem Ipsum", postdate:"21 July, 2020"},
    {name: "Post3", imgsrc:"assets/images/city-3.jpg", alt:"#", imagetext:"Lorem Ipsum", postdate:"21 July, 2020"},
    {name: "Post4", imgsrc:"assets/images/city-4.jpg", alt:"#", imagetext:"Lorem Ipsum", postdate:"21 July, 2020"}
  ];

  holidayposttags: any[] = [ 
    {name: "Lorem", value: "Lorem", href:"#"},
    {name: "Lorem", value: "Lorem", href:"#"},
    {name: "Lorem", value: "Lorem", href:"#"}
  ];


}
