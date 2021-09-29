import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {
  Orientation
} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slidesList: Array<any>;
  public showContent = true;

  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 50000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = true;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 35;
  public slideHeight = '200px';
  public slides;
  public overlayColor = '#00000000';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
      else {
        this.proportion = 35;
      }
    });
  }

  activateHandsetLayout() {
    this.proportion = 70;
  }

  ngOnInit(): void {
    this.slides = this.slidesList.length;
  }

  public onChange(index: number) {
  }

}
