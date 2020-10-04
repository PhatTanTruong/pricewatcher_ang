import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  supportedBranch = [
    {
      name: 'Tiki',
      link: 'https://tiki.vn/',
      image: '../../assets/images/tiki.png'
    },
    {
      name: 'Shopee',
      link: 'https://shopee.vn/',
      image: '../../assets/images/shopee.png'
    },
    {
      name: 'Lazada',
      link: 'https://lazada.vn/',
      image: '../../assets/images/lazada.png'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
