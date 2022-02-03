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
      text: `There are plenty of ways to do so, you can drive over, take an uber or a taxi. If you need a ride
      back to the border from our clinic, we can always ask an Uber for you.`
    }, {
      title: "2.	How easy it is to cross the border?",
      text: `It’s always easier than it seems, you just need to bring your I.D. and your passport since they’ll
      ask for it at the border when crossing back to the U.S.`
    }, {
      title: "3.	How far are you from the border?",
      text: `Relatively close, about 10 minutes away from the border by car.`
    }, {
      title: "4.	Are there any hotels near you?",
      text: `There are, you can ask for recommendations since we have some agreements with several close to us for special prices.`
    }, {
      title: "5.	Do you take U.S. Insurance?",
      text: `We do, only PPO insurances since they’re the only ones that work in Mexico. We’ll still have to do a verification of your benefits, so feel free to contact us and ask for your coverage.`
    }, {
      title: "6.	What are your payment methods?",
      text: `You can pay with cash, credit card (Visa, MasterCard), personal checks or bank transfer (Wells Fargo or Zelle).`
    }, {
      title: "7.	Do you do everything at your office?",
      text: `Yes, for your commodity we perform all of our treatments inside our office in order to give our patients the best experience.`
    }, {
      title: "8.	What is your availability on the week?",
      text: "Monday – Friday 10 am – 5 pm, Saturday 9 am – 3 pm"
    }, {
      title: "9.	Do you offer dental implants?",
      text: "We do! World leader Straumann Dental + Neodent (Straumann)."
    }, {
      title: "10.	What are your payment options?",
      text: `The payments are done as the treatments are completed, but you can always pay in advance towards the total of your treatment plan.`
    }, {
      title: "11.	Do you offer oral sedation I.V.?",
      text: `Yes, we offer that option for patients with high levels of anxiety or other complications.`
    }, {
      title: "12.	What kind of crowns do you offer?",
      text: `We offer full Zirconia crowns or Full Porcelain crowns, either option will be great for you.`
    }, {
      title: "13.	Are veneer/crowns forever?",
      text: `They can last up to 15 years as long as you come regularly to your yearly checkup and cleaning.`
    }, {
      title: "14.	Do you offer teeth whitening?",
      text: `We offer a home whitening kit, which works just as good as the one done in an office. We give you the trays and material here at the office so you can perform it at home.`
    }, {
      title: "15.	What can I do about my gummy smile?",
      text: `We have plenty of options, one of them being gum contouring done by a specialist.`
    }, {
      title: "16.	How far in advance can I set up an appointment?",
      text: `If you know your schedule you can set up your appointments as far as 1-2 months in advance.`
    }, {
      title: "17.	Do you offer any discounts when paid in cash?",
      text: `We do, if you pay your entire treatment in the 1st – 2nd appointment we can give you a 10% discount.`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
