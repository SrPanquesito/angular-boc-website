import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
