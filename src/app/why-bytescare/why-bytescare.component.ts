import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-bytescare',
  templateUrl: './why-bytescare.component.html',
  styleUrls: ['./why-bytescare.component.scss'],
})
export class WhyBytescareComponent implements OnInit {
  constructor() {}

  bytescareCardsInfo = [
    {
      featureName: 'Fast & Economical',
      desc: 'Our automated crawlers and deep learning solutions are quicker and cheaper.',
      img: 'assets/images/why-bytescare/fast-eco.png',
    },
    {
      featureName: 'Robust & Accurate',
      desc: 'Verify infringements to ensure they are not from your official channel partners.',
      img: 'assets/images/why-bytescare/robust-eco.png',
    },
    {
      featureName: 'Scalable',
      desc: 'Regardless of the type, length or number of your content, our technology is designed to handle it.',
      img: 'assets/images/why-bytescare/scalable.png',
    },
    {
      featureName: 'Transparent',
      desc: 'Our automated crawlers and deep learning solutions are quicker and cheaper.',
      img: 'assets/images/why-bytescare/transparent.png',
    },
    {
      featureName: 'Enforcement & Investigation',
      desc: 'Our automated crawlers and deep learning solutions are quicker and cheaper.',
      img: 'assets/images/why-bytescare/enforcement.png',
    },
  ];

  ngOnInit(): void {}
}
