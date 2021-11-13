import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-strategic-implants',
  templateUrl: './strategic-implants.component.html',
  styleUrls: ['./strategic-implants.component.scss']
})
export class StrategicImplantsComponent implements OnInit {
  titlesArr: Array<string> = [
    "The solution you need when other said no",
    "Why are these dental implants different?",
    "What are the Advantages with Strategic implants?"
  ];
  textsArr: Array<string> = [
    "Have you ever been told you weren’t a candidate for dental implants? Strategic implants could be a solution for you.",
    "For placing traditional implants, there are various aspects to take into account before being considered a candidate, such as bone width, length, anatomy properties and your overall health. Strategic implants® are smooth surface implants for bi-cortical anchorage with a simplified technology for restoration/rehabilitation following the immediate functional loading protocols. The concept is based on principles of traumatology and orthopedics, which involve that if implants are initially stable enough they can be immediately loaded with a denture or crown after 72 hours of implantation. This implies that using Strategic Implants, The patient can start eating his normal food within just 3 days.",
    `
    1.       Flapless (No Incisions, No Sutures)
    2.       The patient can actually start eating food within 3-5 days after placing the implants
    3.       Chances of Periimplantitis are greatly reduced.
    4.       No Bone Grafts, No Sinus Lifts, No Ridge Splits Required:
    5.       The procedure is minimally Invasive.
    6.       Works fine in controlled diabetics, Hypertensive patients and smokers.
    `
  ];

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Baja Oral Center - Strategic Implants');
  }

}
