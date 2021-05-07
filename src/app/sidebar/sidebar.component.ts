import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { MatExpansionPanel } from '@angular/material/expansion';
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
  
  panelOpenState = false;
  menu: boolean;
  panel: boolean;

  @ViewChild('servicesPanel') servicesPanel: MatExpansionPanel;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.menu = false;
    this.panel = false;
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        if (!e.urlAfterRedirects.includes("/services")) {
          this.servicesPanel.close();
        }
        this.menu = false;
      }
    });
  }

  ngOnInit(): void { }

  toggleMenu() {
    this.menu = !this.menu;
  }

}
