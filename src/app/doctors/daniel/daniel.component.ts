import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-daniel',
  templateUrl: './daniel.component.html',
  styleUrls: ['./daniel.component.scss']
})
export class DanielComponent implements OnInit {
  subtitleHtml: string = '<h4 class="text-info">Oral Rehabilitation /&nbsp;</h4><h4 class="text-info">Dental Implants</h4>';

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Dr. Daniel Valenzuela');
    this.metaTagService.updateTag({ name: 'og:title', content: 'Dr. Daniel Valenzuela' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'We are a specialized team of dentists continuously training and learning using the latest in dental technology and materials. Our main goal is to apply all of our resources and knowledge to restore, maintain and enhance your smile until you feel comfortable, confident and happy with the results.' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/doc/valenzuela-4.png' });
  }

}
