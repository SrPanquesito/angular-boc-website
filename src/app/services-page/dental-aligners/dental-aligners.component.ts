import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-dental-aligners',
  templateUrl: './dental-aligners.component.html',
  styleUrls: ['./dental-aligners.component.scss']
})
export class DentalAlignersComponent implements OnInit {
  titlesArr: Array<string> = [
    "Straighten your smile in a discreet way",
    "A clear and discreet option to get your desired smile",
    "A metal free treatment you can remove anytime"
  ];
  textsArr: Array<string> = [
    "Forget about the uncomfortable metal wires, align your smile in a clear and discreet manner.",
    "If you’re looking to get a straighter smile, fix crooked teeth or bite irregularities but don’t want to wear braces, Dental Aligners are the option for you. After taking impressions of your teeth, each aligner will be specifically customized to fit you in a comfortable way, and align your teeth in a discreet way.",
    "Using traditional braces makes uncomfortable the way you eat, talk and brush your teeth on a daily basis. Aside from its clear and subtle design, you’ll be able to take your aligners off anytime so you can eat and talk normally, without the hassle of dealing with the wires and metal parts."
  ];

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Dental Aligners');
    this.metaTagService.updateTag({ name: 'og:title', content: 'Dental Aligners' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'Straighten your smile in a discreet way. Forget about the uncomfortable metal wires, align your smile in a clear and discreet manner.' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/boc-banner-dental-small.jpeg' });
  }

}
