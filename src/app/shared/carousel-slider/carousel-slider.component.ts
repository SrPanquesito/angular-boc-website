import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit, AfterViewInit {
  getStyle(index:number)
  {
    if (!this.cellCount)
       return null;
    const angle=(index-this.selectedIndex)*2*Math.PI/this.cellCount
    const scale=((75)+25*Math.cos(angle))/100

    return {
      left:-75+150*Math.sin(angle)+'px',
      transform:'scale('+scale+')',
      position:'absolute',
      "z-index":Math.floor(100*scale)
    }
  }
  get cellCount()
  {
    return this.cells?this.cells.length:0;
  }
  @ViewChild("carousel") carousel: ElementRef
  @ViewChildren("carousel__cell") cells: QueryList<ElementRef>
  selectedIndex = 0;
  cellWidth:number;
  cellHeight:number;
  isHorizontal:boolean = true;
  rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
  radius:number
  theta:number;
  @Input() imagesList: Array<any>;


  initCarousel() {
    this.theta = 360 / this.cellCount;
    const cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
    this.radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / this.cellCount ) );
    this.cells.forEach((cell:ElementRef,i:number)=>
    {
       if (i<this.cellCount)
       {
           cell.nativeElement.style.opacity=1
           const cellAngle=this.theta*i;
           cell.nativeElement.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
       }
       else
       {
        cell.nativeElement.style.opacity = 0;
        cell.nativeElement.style.transform = 'none';

       }
    })
    this.rotateCarousel();
  }


  prev()
  {
    this.selectedIndex--;
    this.rotateCarousel();
  }
  next()
  {
    this.selectedIndex++;
    this.rotateCarousel();
  }

  rotateCarousel() {
    const angle = this.selectedIndex / this.cellCount * -360;
    this.carousel.nativeElement.style.transform = 'translateZ(-288px)'+this.rotateFn+'(' + angle + 'deg)';
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.imagesList);
  }

  ngAfterViewInit()
  {
    this.cellWidth = this.carousel.nativeElement.offsetWidth;
    this.cellHeight = this.carousel.nativeElement.offsetHeight;
    this.initCarousel()
  }

}
