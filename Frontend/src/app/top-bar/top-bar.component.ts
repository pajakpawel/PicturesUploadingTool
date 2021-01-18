import { Component, OnInit } from '@angular/core';

import {AppConstants} from '../constants';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  appTitle = AppConstants.appTitle;

  constructor() { }

  ngOnInit(): void {
  }

}
