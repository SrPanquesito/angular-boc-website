import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  
  fabItemSelected(e: number) {
    switch (e) {
      case 1:
        window.open('http://m.me/BajaOralCenter', '_blank').focus();
        break;
      case 2:
        window.open('https://api.whatsapp.com/send?phone=16192705368', '_blank').focus();
        break;
      case 3:
        window.open('sms:6192705368?body=Hello. I would like to make an appointment.', '_blank').focus();
        break;
      case 4:
        window.open('tel:6192705368', '_blank').focus();
        break;
    
      default:
        break;
    }
  }

}