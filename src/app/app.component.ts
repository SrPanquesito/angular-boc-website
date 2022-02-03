import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-boc-website';
  faCoffee = faCoffee;
  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/messenger.svg',
      tooltip: 'Messenger',
      tooltipPosition: 'before'
    },
    {
      id: 2,
      imgUrl: 'assets/icons/whatsapp.svg',
      tooltip: 'Whatsapp',
      tooltipPosition: 'before'
    },
    {
      id: 3,
      icon: 'sms',
      tooltip: 'SMS',
      tooltipPosition: 'before'
    },
    {
      id: 4,
      icon: 'call',
      tooltip: 'Teléfono',
      tooltipPosition: 'before'
    },
  ];

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Baja Oral Center');
    this.metaTagService.addTags([
      { charset: 'UTF-8' },
      { name: 'keywords', content: 'Baja Oral Center, Oral, Baja California, Tijuana, Dental, Dentist, Crossborder, All on 4, All on X, Botox, Implants, Mexico, México' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { name: 'author', content: 'Luis Diaz Reynoso' },
      { name: 'robots', content: 'index, follow' },
      { name: 'date', content: '2021-10-31', scheme: 'YYYY-MM-DD' },
      { name: 'og:site_name', content: 'Baja Oral Center' },
      { name: 'og:title', content: 'Homepage' },
      { name: 'og:description', content: 'A premier group of Tijuana Dentists who pride themselves on giving the most specialized dental attention that you deserve. Call Today! US (619)270-5368  MX (664)634-7626.'},
      { name: 'og:image', content: env.meta_url + '/assets/img/home-1.jpg' },
    ]);
  }
  
  fabItemSelected(e: number) {
    switch (e) {
      case 1:
        window.open('http://m.me/BajaOralCenter', '_blank').focus();
        break;
      case 2:
        window.open('https://api.whatsapp.com/send?phone=16192705368', '_blank').focus();
        break;
      case 3:
        window.open('sms:+16192705368', '_blank').focus();
        break;
      case 4:
        window.open('tel:+16192705368', '_blank').focus();
        break;
    
      default:
        break;
    }
  }

}