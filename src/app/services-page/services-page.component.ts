import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  subtitleHtml: string = "<h5 class='text-info'>The most innovative dental treatments done with the latest technology and materials to restore, maintain & enhance your dental health</h5>";

  constructor() { }

  ngOnInit(): void {
  }

}
