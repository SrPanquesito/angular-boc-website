import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  @Input() mainTitle: string;
  @Input() mainImageDesktop: string;
  @Input() mainImageMobile: string;
  @Input() titles: Array<string>;
  @Input() texts: Array<string>;
  @Input() images: Array<string>;
  @Input() showContent: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
