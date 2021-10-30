import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  titlesArr: Array<string> = [
    "Where science and art merge to create your desired smile",
    "Dentistry done the right way",
    "Various treatments, one single goal"
  ];
  textsArr: Array<string> = [
    "Restore your smile with Advanced Dentistry, where the latest techniques and treatments are performed with one goal in mind, to create the best outcome with a functional, aesthetic and natural look.",
    "Creating the smile you desire not only requires a list of procedures to be made, but a capable, experienced dentist who can perform them as well. Advanced dentistry focuses on the most advanced procedures and techniques performed by our team of dentists, constantly learning and practicing to maintain the level of skill and professionalism you deserve.",
    "Advanced Dentistry focuses on combining every necessary treatment to reach the main goal: a natural, practical and functional smile. In addition to that, it also applies the most innovative and functional techniques so you can have a painless and comfortable experience."
  ];

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Advanced Dentistry');
    this.metaTagService.updateTag({ name: 'og:title', content: 'Advanced Dentistry' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'Where science and art merge to create your desired smile. Restore your smile with Advanced Dentistry, where the latest techniques and treatments are performed with one goal in mind, to create the best outcome with a functional, aesthetic and natural look.' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/boc-banner-home-small.png' });
  }

}
