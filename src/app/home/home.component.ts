import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannersArrayDesktop: Array<any> = [
    {backgroundImage: 'assets/banners/boc-banner-home.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-botox.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-rootcanal.jpeg'}
  ];
  bannersArrayMobile: Array<any> = [
    {backgroundImage: 'assets/banners/boc-banner-home-small.jpg'},
    {backgroundImage: 'assets/banners/boc-banner-botox-small.jpg'},
    {backgroundImage: 'assets/banners/boc-banner-rootcanal-small.jpg'}
  ];

  constructor(public router: Router){
    this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
           gtag('config', 'G-B4V6GJJ1PR', { 'page_path': event.urlAfterRedirects });
        }
     })
  }

  ngOnInit(): void {
  }

}
