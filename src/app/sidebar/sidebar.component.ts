import { Component, OnInit } from '@angular/core';
import { pulseAnimation } from 'angular-animations';
import { trigger, state, style, animate, transition, keyframes, query } from '@angular/animations';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    pulseAnimation(),
    trigger('openCloseMenu', [
      state('open', style({
        height: '*',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      transition('open => closed', [
        query('ul', style({ height: '*' })),
        query('ul', animate('500ms', style({ height: '0px' }))),
        animate('500ms', keyframes([
          style({ opacity: 1,  offset: 0 }),
          style({ opacity: 0, offset: 0.25 }),
          style({ height: '*',  offset: 0.26 }),
          style({ height: '0px',  offset: 1 }),
        ]))
      ]),
      transition('closed => open', [
        query('ul', style({ height: '0px' })),
        query('ul', animate('500ms', style({ height: '*' }))),
        animate('500ms', keyframes([
          style({ height: '0px',  offset: 0 }),
          style({ height: '*',  offset: 0.75 }),
          style({ opacity: 0,  offset: 0.76 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])

    ])
  ]
})
export class SidebarComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  hoverBrand: boolean;
  menu: boolean;

  constructor() {
    this.hoverBrand = false;
    this.menu = false;
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

}
