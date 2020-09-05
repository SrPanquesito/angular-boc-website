import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }

}
