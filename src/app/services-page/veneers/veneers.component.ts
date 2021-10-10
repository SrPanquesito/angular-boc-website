import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veneers',
  templateUrl: './veneers.component.html',
  styleUrls: ['./veneers.component.scss']
})
export class VeneersComponent implements OnInit {
  titlesArr: Array<string> = [
    "Show the world the best version of you",
    "Give your teeth a new, brighter look",
    "Slight modifications, massive results"
  ];
  textsArr: Array<string> = [
    "You dream it, you live it. Achieve the natural smile you’ve always wanted and reclaim your confidence with porcelain veneers.",
    "Whether you have chipped teeth, discoloration, gaps, smaller than average or unusually shaped teeth, porcelain veneers will help you achieve the bright, even smile you’ve always wanted. Porcelain veneers are thin porcelain layers that go on top of your teeth, uniquely shaped to create a natural and aesthetically pleasing look.",
    "By the nature of the veneers, a minimum grind has to be done to the front part of your teeth, so the veneers can be placed on top to achieve the bright, natural smile you desire. Although the preparation for the teeth is slightly invasive, you won’t feel the difference, most of your own tooth is preserved so you feel the sensation and function of a natural tooth, but with the aesthetically pleasing look a veneer can give you."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
