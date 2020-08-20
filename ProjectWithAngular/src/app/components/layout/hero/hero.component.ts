import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bottomnavs: any[] = [
    {name: "Home", value:"Home", routerLink: "" },
    {name: "Life", value:"Life", routerLink: "/life" },
    {name: "Vintage", value:"Vintage", routerLink: "" },
    {name: "Latest", value:"Latest", routerLink: "" },
    {name: "Travel", value:"Travel", routerLink: "" },
    {name: "Design", value:"Design", routerLink: "" }
  ];
}

