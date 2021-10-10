import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sedation',
  templateUrl: './sedation.component.html',
  styleUrls: ['./sedation.component.scss']
})
export class SedationComponent implements OnInit {
  titlesArr: Array<string> = [];
  textsArr: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
