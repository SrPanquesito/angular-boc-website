import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-zirconia',
  templateUrl: './zirconia.component.html',
  styleUrls: ['./zirconia.component.scss']
})
export class ZirconiaComponent implements OnInit {
  titlesArr: Array<string> = [
    "The best of two worlds, durability and aesthetics",
    "The best quality for you!",
    "Specially tailored just for you"
  ];
  textsArr: Array<string> = [
    "Say goodbye to the metal frame and fragile porcelain, and gain the confidence of a functional, durable set of teeth.",
    "Crowns are often used when treating damaged teeth after a root canal or a cracked tooth, supporting large fillings or change the overall shape and color of a tooth. If you’re in need of a crown but you’re concerned about the porcelain not being resistant enough, worry no more. Zirconia crowns are not only aesthetically more pleasing and natural looking but a sturdier, solid material as well.",
    "Not only are Zirconia crowns durable and practical, but aesthetically pleasing as well. For that reason, we make each individual crown customized to your wants and needs until you’re pleased with the results. The shape, color, size and length are some of the aspects to consider when getting a new crown placed, so feel free to let us know what you’re looking for."
  ];

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Zirconia Crowns');
    this.metaTagService.updateTag({ name: 'og:title', content: 'Zirconia Crowns' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'The best of two worlds, durability and aesthetics. Say goodbye to the metal frame and fragile porcelain, and gain the confidence of a functional, durable set of teeth.' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/services/zirconia-1.png' });
  }

}
