import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent implements OnInit {
  testimonialsList = [
    {
      userName: 'Ajay Karakoti',
      testimonialText:
        'They have an exceptional understanding of Piracy & Cyber Investigations. They save costs in technical & legal operations',
      userImg: 'assets/images/testimonials/drishtiuser.png',
      brandImg: 'assets/images/testimonials/drishtiias.png',
    },
    {
      userName: 'Sanjay Sindhwani',
      testimonialText:
        'Bytescare offers solutions to detect and control the piracy of your content from fraudulent websites and content pirates. Bytescare solutions are like watchmen of Digital News Publishers and we highly recommend their services',
      userImg: 'assets/images/testimonials/ajay.png',
      brandImg: 'assets/images/testimonials/ie.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
