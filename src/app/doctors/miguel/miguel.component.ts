import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miguel',
  templateUrl: './miguel.component.html',
  styleUrls: ['./miguel.component.scss']
})
export class MiguelComponent implements OnInit {
  subtitleHtml: string = '<h4 class="text-info">Oral Rehabilitation /&nbsp;</h4><h4 class="text-info">Dental Implants</h4>';

  constructor() { }

  ngOnInit(): void {
  }

}
