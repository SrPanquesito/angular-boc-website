import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botox',
  templateUrl: './botox.component.html',
  styleUrls: ['./botox.component.scss']
})
export class BotoxComponent implements OnInit {
  titlesArr: Array<string> = [
    "Your teeth are only the beginning",
    "Get rid of all the unnecessary wrinkles and look your best at any age",
    "One of the easiest ways to enhance your face"
  ];
  textsArr: Array<string> = [
    "Get rid of all the unnecessary wrinkles, dare to find out what works best for you.",
    "Make your teeth only the beginning, take it to the next level and rejuvenate your face with botox. Pair your healthy and youthful smile with a wrinkle-free face, not only it will give you a more relaxed look, but boost your confidence and make you feel more like yourself.",
    "If you’re aiming to get more volume on certain areas of your face, such as plump looking lips or fill deep seated wrinkles, fillings will just do the trick. Be daring to enhance your face, and give yourself a younger and refreshed look, because a beautiful smile can only go better with a charming face."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
