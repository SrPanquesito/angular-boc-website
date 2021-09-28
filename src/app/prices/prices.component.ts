import { Component, OnInit } from '@angular/core';

interface Service {
  name: string;
  boc_price: string;
  usa_price: string;
}
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  services: Service[] = [
    {name: 'Consultation with X-Rays', boc_price: '$40', usa_price: '$70'},
    {name: 'Regular Cleanings', boc_price: '$60', usa_price: '$90'},
    {name: 'Composite Filling', boc_price: '$50', usa_price: '$120'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
