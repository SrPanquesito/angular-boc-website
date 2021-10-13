import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-canal',
  templateUrl: './root-canal.component.html',
  styleUrls: ['./root-canal.component.scss']
})
export class RootCanalComponent implements OnInit {
  titlesArr: Array<string> = [
    "Give your tooth another chance",
    "The best course of action to ease your aching tooth",
    "Don’t lose your tooth, just lose the pain instead"
  ];
  textsArr: Array<string> = [
    "Don’t lose hope on that hurting tooth, relieve the pain and restore your tooth to its healthy self.",
    "When a tooth gets infected and it can no longer be treated with a filling or crown, the best course of action to not lose the tooth is to perform a root canal. Though it may seem like a painful experience, in reality a root canal is a painless experience, and in the end you’ll feel relieved of that pain that’s been bothering so much.",
    "Before opting to permanently lose a tooth, our goal is to try to save it first with any necessary treatment, since it’s always best to save your tooth whenever possible. Though in some cases the infection goes too deep that we need to extract the tooth, most of the time it is still salvageable by performing a root canal."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
