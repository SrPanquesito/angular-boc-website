import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() bgImageDesktop: string;
  @Input() bgImageMobile: string;
  @Input() titleType: string;
  @Input() titleContent: string;
  @Input() subtitleHtml: string;
  @Input() buttonText: string;
  @Input() buttonLink: string;

  constructor() { }

  ngOnInit(): void { }

}
