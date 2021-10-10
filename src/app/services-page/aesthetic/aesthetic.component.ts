import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aesthetic',
  templateUrl: './aesthetic.component.html',
  styleUrls: ['./aesthetic.component.scss']
})
export class AestheticComponent implements OnInit {
  titlesArr: Array<string> = [
    "Where science and art merge to create your desired smile",
    "A different approach than Cosmetic Dentistry",
    "Various treatments, one single goal"
  ];
  textsArr: Array<string> = [
    "Restore your smile with Aesthetic Dentistry, where the latest techniques and treatments are performed with one goal in mind, to create the best outcome with a functional, aesthetic and natural look.",
    "One of the key aspects of Aesthetic Dentistry is the employment of different individual treatments to restore your overall smile, in contrast to Cosmetic Dentistry, where It mainly focuses on treatments aimed to make your teeth look better. If your goal is to have a healthy, functional and natural smile, Aesthetic Dentistry could be the option for you.",
    "More than improving the overall look of your smile with cosmetic treatments, Aesthetic Dentistry focuses on combining every necessary treatment to reach the main goal: a natural, practical and functional smile."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
