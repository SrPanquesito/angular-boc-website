import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() icon: string;
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() text: string;
  @Input() linkUrl: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLink(): void {
    this.router.navigate([this.linkUrl]);
  }

}
