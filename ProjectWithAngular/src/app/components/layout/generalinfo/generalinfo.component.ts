import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styleUrls: ['./generalinfo.component.scss']
})
export class GeneralinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  column1: any[] = [
    {name: "LoremIpsum", value: "LoremIpsum"},
    {name: "LoremIpsum", value: "LoremIpsum"},
    {name: "LoremIpsum", value: "LoremIpsum"},
    {name: "LoremIpsum", value: "LoremIpsum"},
    {name: "LoremIpsum", value: "LoremIpsum"}
  ]

  column2: any[] = [
    {name: "LoremIpsum", value: "LoremIpsum"},
    {name: "LoremIpsum", value: "LoremIpsum"},
    {name: "LoremIpsum", value: "LoremIpsum"}
  ]

}
