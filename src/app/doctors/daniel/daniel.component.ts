import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daniel',
  templateUrl: './daniel.component.html',
  styleUrls: ['./daniel.component.scss']
})
export class DanielComponent implements OnInit {
  subtitleHtml: string = '<h4 class="text-info">Oral Rehabilitation /&nbsp;</h4><h4 class="text-info">Dental Implants</h4>';

  constructor() { }

  ngOnInit(): void {
  }

}
