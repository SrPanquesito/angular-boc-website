import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  Orientation
} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public slidesList = new Array<never>(5);
  public showContent = true;

  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = true;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 35;
  public slideHeight = '200px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000000';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(index: number) {
  }

}
