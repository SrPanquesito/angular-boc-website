import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  subtitleHtml: string = "<h5 class='text-info'>The most innovative dental treatments done with the latest technology and materials to restore, maintain & enhance your dental health</h5>";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Services');
    this.metaTagService.updateTag({ name: 'og:title', content: 'Services' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'The most innovative dental treatments done with the latest technology and materials to restore, maintain & enhance your dental health' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/services/s-6.png' });
  }

}
