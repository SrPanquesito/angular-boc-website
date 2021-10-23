import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat = 32.524187;
  lng = -117.0135489;
  zoom: number = 16;

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Contact Us');
    this.metaTagService.updateTag({ name: 'og:title', content: 'Contact Us' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'Because you\'re probably coming from far away, we have a friendly staff that can assist you in planning your trip to our office and scheduling your next appointment with us.' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/boc-banner-home-small.png' });
  }

}
