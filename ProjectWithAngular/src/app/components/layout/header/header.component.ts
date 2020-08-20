import { Component, OnInit, Input } from '@angular/core';
import { todaysDate } from '../../../utils/helpers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentDate = todaysDate;

  constructor() { }

  ngOnInit(): void {
  }
  
  topnavs: any[] = [
    {name: "Blog", value:"Blog", routerLink: "" },
    {name: "Latest", value:"Latest", routerLink: "" },
    {name: "Life", value:"Life", routerLink: "" },
    {name: "Travel", value:"Travel", routerLink: "" },
    {name: "Fashion", value:"Fashion", routerLink: "" }
  ];

  sprites: any[] = [
    {name: "Facebook", class:"facebook", routerLink: "" },
    {name: "Twitter", class:"twitter", routerLink: "" },
    {name: "Pinterest", class:"pinterest", routerLink: "" },
    {name: "Youtube", class:"youtube", routerLink: "" }
  ];
}
