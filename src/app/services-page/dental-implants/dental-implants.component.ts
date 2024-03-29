import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-dental-implants',
  templateUrl: './dental-implants.component.html',
  styleUrls: ['./dental-implants.component.scss']
})
export class DentalImplantsComponent implements OnInit {
  titlesArr: Array<string> = [
    "Your best option to recover a lost tooth",
    "Get the permanent solution you need with the quality you deserve",
    "Planning ahead with the latest technology"
  ];
  textsArr: Array<string> = [
    "Replace your missing teeth with strong and durable dental implants. Regain the comfort of having a complete, healthy smile.",
    "Forget about the insecurity of having big gaps in your mouth. possible infections, decay and bone loss. If you have missing teeth, the best permanent option is to replace them with dental implants. and restore your smile to its healthy and beautiful self. On that note, not only do we take pride in our work, but on the quality of our equipment and materials as well. Although we've worked with different implants brands over the time, we mainly use Straumann and NeoDent Dental Implants, both of them from the leading brand Straumann ®.",
    "In order to plan, diagnose and perform the surgeries in a more exact manner, the first step is to take a Computerized Tomography scan (Or CT Scan for short), using state of the art technology that gives us a 3D X-Ray of your mouth, divided in cross-sectional images. With this, we can do a more detailed planning for your case, resulting in an anticipated and foreseeable outcome."
  ];

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Dental Implants');
    this.metaTagService.updateTag({ name: 'og:title', content: 'Dental Implants' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'Your best option to recover a lost tooth. Replace your missing teeth with strong and durable dental implants. Regain the comfort of having a complete, healthy smile.' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/boc-banner-implants-small.jpeg' });
  }

}
