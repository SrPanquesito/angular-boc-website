import { Component, Input, OnInit } from '@angular/core';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';

interface Service {
  name: string;
  boc_price: string;
  usa_price?: string;
  extra?: string;
  currency_off?: boolean;
}

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() iconUrl: string;
  @Input() services: Array<Service>;

  faMoneyBillAlt = faMoneyBillAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
