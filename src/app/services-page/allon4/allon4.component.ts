import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-allon4',
  templateUrl: './allon4.component.html',
  styleUrls: ['./allon4.component.scss']
})
export class Allon4Component implements OnInit {
  titlesArr: Array<string> = [
    "Bring back your glory days",
    "The permanent solution you’ve been looking for",
    "Forget about the uneasiness of a loose denture"
  ];
  textsArr: Array<string> = [
    "Secure the way you talk and eat, feel confident again and reclaim the security of having a complete, youthful smile.",
    "Having several missing or decaying teeth can lead to more than just affecting the look of your smile, but on your overall health as well. While there are various ways to replace one or various teeth, dental implants are the most durable, longer lasting option. Combine that with a fixed denture supported by those implants and you’ll get yourself an All-on-4, which will get you the complete, permanent, fixed smile you desire and deserve.",
    "For patients that don’t have the majority of their teeth, 4 implants may not be enough to support the complete denture. In those cases, an All-on-X will be the right course of action, where we’ll determine if you’ll need 6, 8 or X amount of implants to support the dentures. This will depend on the amount of bone you have amongst other factors, but after all the planning and procedures are done, you’ll end up feeling and looking like how you were in your glorious youthful days."
  ];

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - All on 4 / All on X');
    this.metaTagService.updateTag({ name: 'og:title', content: 'All on 4 / All on X' });
    this.metaTagService.updateTag({ name: 'og:description', content: 'Bring back your glory days. Secure the way you talk and eat, feel confident again and reclaim the security of having a complete, youthful smile.' },);
    this.metaTagService.updateTag({ name: 'og:image', content: env.meta_url + '/assets/img/boc-banner-allon4-small.jpeg' });
  }

}
