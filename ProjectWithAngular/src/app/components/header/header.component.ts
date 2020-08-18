import { Component, OnInit, Input } from '@angular/core';
import { todaysDate } from '../../utils/helpers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentDate = todaysDate;

  constructor() { }

  ngOnInit(): void {
  }

}
