import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  panelOpenState = false;

  questions = [
    {
      title: "1.  How do I get from the border to you?",
      text: "There are plenty of ways to do so, you can drive over, take an uber or a taxi."
    }, {
      title: "2.	How easy it is to cross the border?",
      text: "It’s always easier than it seems, you just need to bring your I.D. + passport."
    }, {
      title: "3.	How far are you from the border?",
      text: "Relatively close, about 10 minutes away from the border."
    }, {
      title: "4.	Are there any hotels near you?",
      text: "There are, you can ask for recommendations since we have some agreements with several for special prices."
    }, {
      title: "5.	Do you take U.S. Insurance?",
      text: "We do, only PPO insurance since they’re the only ones that work in México."
    }, {
      title: "6.	What are your payment methods?",
      text: "You can pay with Cash, Credit card (Visa, MasterCard) or transfer (Wells Fargo or Zelle)."
    }, {
      title: "7.	Do you do everything at your office?",
      text: "We do, we try to give our patients the best experience, and that means having everything they need in hand!"
    }, {
      title: "8.	What is your availability on the week?",
      text: "Monday – Friday 10 am – 5 pm Saturday 9 am – 3 pm"
    }, {
      title: "9.	Do you offer dental implants?",
      text: "We do! World leader Straumann Dental + Neodent (Straumann)."
    }, {
      title: "10.	What are your payment options?",
      text: "You can pay it all at once, or pay as you go."
    }, {
      title: "11.	Do you offer oral sedation I.V.?",
      text: "Yes, for patient with high levels of anxiety or other complications."
    }, {
      title: "12.	What kind of crowns do you offer?",
      text: "We offer full Zirconia crowns or Full Porcelain, either option will be great for you."
    }, {
      title: "13.	Are veneer/crowns forever?",
      text: "They can last up to 15 years as long as you come regularly to your yearly cleaning + checkup."
    }, {
      title: "14.	Do you offer teeth whitening?",
      text: "We offer at home whitening kit, $150.00 usd and it works just as good as the one done in office."
    }, {
      title: "15.	What can I do about my gummy smile?",
      text: "We have plenty options, one of them being Gum contouring done by an specialist!"
    }, {
      title: "16.	How far in advance can I set up an appointment?",
      text: "If you know your schedule you can set up your appointments as far as 1-2 months in advance."
    }, {
      title: "17.	Do you offer any discounts when paid in cash?",
      text: "We do, if you pay your entire treatment in the 1st – 2nd appointment we give you 10% discount!"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
