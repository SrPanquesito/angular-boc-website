import { Component, Input, OnInit } from '@angular/core';

interface Service {
  name: string;
  boc_price: string;
  usa_price: string;
}

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() services: Array<Service>;

  constructor() { }

  ngOnInit(): void {
  }

}
