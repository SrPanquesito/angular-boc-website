import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, animateChild } from '@angular/animations';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('openCloseMenu', [
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('500ms', keyframes([
          style({ height: '*',  offset: 0 }),
          style({ height: '0px',  offset: 0.25 }),
          style({ opacity: 1,  offset: 0.75 }),
          style({ opacity: 0, offset: 1 }),
        ]))
      ]),
      transition('closed => open', [
        animate('500ms', keyframes([
          style({ height: '0px',  offset: 0 }),
          style({ height: '*',  offset: 0.25 }),
          style({ opacity: 0,  offset: 0.26 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])
    ]),

  ]
})
export class SidebarComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  menu: boolean;

  constructor() {
    this.menu = false;
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

}
