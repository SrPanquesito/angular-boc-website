import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dental-implants',
  templateUrl: './dental-implants.component.html',
  styleUrls: ['./dental-implants.component.scss']
})
export class DentalImplantsComponent implements OnInit {
  titlesArr: Array<string> = [
    "Your best option to recover a lost tooth",
    "Get the permanent solution you need",
    "The best quality for you"
  ];
  textsArr: Array<string> = [
    "Replace your missing teeth with strong and durable dental implants. Regain the comfort of having a complete, healthy smile.",
    "Forget about the insecurity of having big gaps in your mouth, possible infections, decay and bone loss. If you have missing teeth, the best permanent option is to replace them with dental implants, and restore your smile to its healthy and beautiful self.",
    "Not only do we take pride in our work, but on the quality of our equipment and materials as well. Although we’ve worked with different implants brands over the time, we mainly use Straumann and NeoDent Dental Implants, both of them from the leading brand Straumann®."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
