import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-canal',
  templateUrl: './root-canal.component.html',
  styleUrls: ['./root-canal.component.scss']
})
export class RootCanalComponent implements OnInit {
  titlesArr: Array<string> = [];
  textsArr: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
