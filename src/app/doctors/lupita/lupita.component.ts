import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lupita',
  templateUrl: './lupita.component.html',
  styleUrls: ['./lupita.component.scss']
})
export class LupitaComponent implements OnInit {
  subtitleHtml: string = '<h4 class="text-info">Cosmetic Dentistry</h4>';

  constructor() { }

  ngOnInit(): void {
  }

}
