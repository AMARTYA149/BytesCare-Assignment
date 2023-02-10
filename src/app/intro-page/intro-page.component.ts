import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  // numbers: number[] = [];
  constructor() {
    // this.numbers = Array(6)
    //   .fill()
    //   .map((x, i) => i);
  }

  clientsLogo: string[] = [];

  ngOnInit(): void {}
}
