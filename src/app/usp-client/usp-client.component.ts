import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usp-client',
  templateUrl: './usp-client.component.html',
  styleUrls: ['./usp-client.component.scss'],
})
export class UspClientComponent implements OnInit {
  bytescareCardsInfo = [
    {
      featureName: 'Market Intelligence',
      desc: 'It helps clients Gain valuable insights into the potential market by removing copies and links to your original content. There is a provision for tracking the entire workflow of the service.',
      img: 'assets/images/why-bytescare/fast-eco.png',
    },
    {
      featureName: 'Improve Your ROI',
      desc: 'Our anti-piracy solutions are designed in a way to succor clients in improving their ROI without affecting the revenue.',
      img: 'assets/images/why-bytescare/robust-eco.png',
    },
    {
      featureName: 'Reach out to Potential Customers',
      desc: 'We design products that help brands & companies to serve additional products & services to their potential as well as existing customers thereby increasing your revenue.',
      img: 'assets/images/why-bytescare/scalable.png',
    },
    {
      featureName: 'Profitability',
      desc: 'Our efficient & cost-effective services reduce the cost associated with technical & legal operations enhancing their sales & scaling customer engagement.',
      img: 'assets/images/why-bytescare/transparent.png',
    },
    {
      featureName: 'Improve your Website Ranking',
      desc: 'Combating the piracy damage to the content restricts the presence of duplicate copies of the original content on the web henceforth improving your website ranking for the search engines.',
      img: 'assets/images/why-bytescare/enforcement.png',
    },
  ];

  platformList = [
    {
      place: 'Marketplaces',
      img: 'assets/images/platforms/ma-icon.png',
    },
    {
      place: 'Social Media',
      img: 'assets/images/platforms/sm-icon.png',
    },
    {
      place: 'Websites',
      img: 'assets/images/platforms/website.png',
    },
    {
      place: 'Domains',
      img: 'assets/images/platforms/domain.png',
    },
    {
      place: 'Search Engines',
      img: 'assets/images/platforms/seng-icon.png',
    },
    {
      place: 'Mobile Apps',
      img: 'assets/images/platforms/ma-icon.png',
    },
    {
      place: 'Video Platforms',
      img: 'assets/images/platforms/vp-icon.png',
    },
    {
      place: 'Cyberlockers',
      img: 'assets/images/platforms/cl-icon.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
