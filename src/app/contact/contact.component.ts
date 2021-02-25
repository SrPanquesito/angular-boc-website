import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat = 32.524187;
  lng = -117.0135489;
  zoom: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
