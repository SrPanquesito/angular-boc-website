import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faWhatsapp, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faYelp = faYelp;

  constructor() { }

  ngOnInit(): void {
  }

}
