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
    {backgroundImage: 'assets/banners/main.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-allon4.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-implants.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-zirconia.jpeg'},
  ];
  bannersArrayMobile: Array<any> = [
    {backgroundImage: 'assets/banners/main-small.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-allon4-small.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-implants-small.jpeg'},
    {backgroundImage: 'assets/banners/boc-banner-zirconia-small.jpeg'}
  ];
  carouselArrayImages: Array<any> = [
    {backgroundImage: 'assets/banners/temp-1.jpeg'},
    {backgroundImage: 'assets/banners/temp-2.jpeg'},
    {backgroundImage: 'assets/banners/temp-3.jpeg'},
    {backgroundImage: 'assets/banners/temp-4.jpeg'},
    {backgroundImage: 'assets/banners/temp-5.jpeg'},
    {backgroundImage: 'assets/banners/temp-6.jpeg'},
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
