import { Component, OnInit } from '@angular/core';
import { pulseAnimation } from 'angular-animations';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    pulseAnimation()
  ]
})
export class SidebarComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  hoverBrand: boolean;

  constructor() {
    this.hoverBrand = false;
  }

  ngOnInit(): void {
  }

}
