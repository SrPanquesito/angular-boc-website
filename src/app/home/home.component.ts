import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
declare let gtag: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannersArrayDesktop: Array<any> = [
    {backgroundImage: 'assets/banners/boc-banner-home.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-allon4.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-implants.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-zirconia.jpeg'}
  ];
  bannersArrayMobile: Array<any> = [
    {backgroundImage: 'assets/banners/boc-banner-home-small.jpg'},
    {backgroundImage: 'assets/banners/boc-banner-allon4-small.jpg'},
    {backgroundImage: 'assets/banners/boc-banner-implants-small.jpg'},
    {backgroundImage: 'assets/banners/boc-banner-zirconia-small.jpg'}
  ];

  constructor(public router: Router, private titleService: Title){
    this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
           gtag('config', 'UA-98422402-1', { 'page_title' : 'homepage', 'page_path': event.urlAfterRedirects });
        }
     })
  }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center');
  }

}
