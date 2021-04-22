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
      icon: 'call',
      tooltip: 'Teléfono',
      tooltipPosition: 'before'
    },
    {
      id: 2,
      icon: 'email',
      tooltip: 'Email',
      tooltipPosition: 'before'
    },
    {
      id: 3,
      imgUrl: 'assets/icons/whatsapp.svg',
      tooltip: 'Whatsapp',
      tooltipPosition: 'before'
    },
    {
      id: 4,
      imgUrl: 'assets/icons/instagram.svg',
      tooltip: 'Instagram',
      tooltipPosition: 'before'
    },
    {
      id: 5,
      imgUrl: 'assets/icons/facebook.svg',
      tooltip: 'Facebook',
      tooltipPosition: 'before'
    },
  ];

  fabItemSelected(e: number) {
    switch (e) {
      case 1:
        console.log(e);
        break;
    
      default:
        break;
    }
  }

}