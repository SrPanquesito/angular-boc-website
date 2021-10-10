import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orofacial',
  templateUrl: './orofacial.component.html',
  styleUrls: ['./orofacial.component.scss']
})
export class OrofacialComponent implements OnInit {
  titlesArr: Array<string> = [];
  textsArr: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
