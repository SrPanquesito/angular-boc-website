import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: Function;

interface Services {
  general?: Array<Service>,
  cosmetic?: Array<Service>,
  implants?: Array<Service>,
  endodontics?: Array<Service>,
  periodontics?: Array<Service>,
  oral_surgery?: Array<Service>,
  orthodontics?: Array<Service>,
}
interface Service {
  name: string;
  boc_price: string;
  usa_price?: string;
  extra?: string;
  currency_off?: boolean;
}
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  services: Services = {
    general: [
      {name: 'Consultation with X-Rays', boc_price: '$40'},
      {name: 'Regular Cleanings', boc_price: '$60 - $80'},
      {name: 'Composite Filling', boc_price: '$60 - $100'},
      {name: 'Temporary partial (Flipper)', boc_price: '$60 - $100', extra: 'up to 3 Units'},
      {name: 'Removable Partial', boc_price: '$500', extra: 'per Arch'},
      {name: 'Denture', boc_price: '$600', extra: 'per Arch'},
      {name: 'PFM (Porcelain Fused to metal) Crown', boc_price: '$350'},
      {name: 'Tooth Bonding (Front Tooth)', boc_price: '$100'},
    ],
    cosmetic: [
      {name: 'Porcelain Veneer', boc_price: '$500'},
      {name: 'All Porcelain Crown', boc_price: '$500'},
      {name: '1 Day All Porcelain Crown (Cerec)', boc_price: '$550'},
      {name: 'Zirconia / Porcelain Crown', boc_price: '$500'},
      {name: 'Full Zirconia Crown', boc_price: '$500'},
      {name: 'Porcelain Inlay / Onlay', boc_price: '$300'},
      {name: 'Whitening take home kit', boc_price: '$150'},
    ],
    implants: [
      {name: 'Single Dental Implant', boc_price: '$1000'},
      {name: 'All on 4', boc_price: '$13,000', extra: 'per Arch'},
      {name: 'All on 6', boc_price: '$15,000', extra: 'per Arch'},
      {name: 'Abutment', boc_price: '$400 - $500'},
      {name: 'PFM Crown For Implant', boc_price: '$400'},
      {name: 'Sinus Lift', boc_price: '$600'},
      {name: 'Bone Graft', boc_price: '$400'},
    ],
    endodontics: [
      {name: 'Root Canal Treatment (Front)', boc_price: '$300'},
      {name: 'Root Canal Treatment (Bicuspid & Molar)', boc_price: '$350'},
      {name: 'Root Canal Re-Treatment (Front)', boc_price: '$350'},
      {name: 'Root Canal Re-Treatment (Bicuspid & Molar)', boc_price: '$400'},
      {name: 'Endo Fiber Post & Core Build Up', boc_price: '$150'},
      {name: 'Internal Bleach', boc_price: '$200', extra: 'per Tooth'},
    ],
    periodontics: [
      {name: 'Periodontal Consultation', boc_price: '$60'},
      {name: 'Root Planning (Deep Cleaning)', boc_price: '$150', extra: 'per Quadrant'},
      {name: 'Periodontal Surgery', boc_price: '$350', extra: 'per Quadrant'},
      {name: 'Connective Tissue Graft', boc_price: '$600'},
    ],
    orthodontics: [
      {name: 'Orthodontic Treatment', boc_price: '$2500'},
      {name: 'Invisalign', boc_price: '$4500'},
    ],
    oral_surgery: [
      {name: 'Simple Extraction', boc_price: '$100'},
      {name: 'Simple Extraction with Bone Graft (Socket Preservation)', boc_price: '$350'},
      {name: 'Surgical Tooth Extraction', boc_price: '$150'},
      {name: 'Surgical Extraction w/ Bone Graft', boc_price: '$400'},
      {name: 'Wisdom Tooth Removal', boc_price: 'referred to specialist', currency_off: true},
    ]
  };

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
         gtag('config', 'UA-98422402-1', { 'page_title' : 'prices', 'page_path': event.urlAfterRedirects });
      }
   })
  }

  ngOnInit(): void {
  }

}
