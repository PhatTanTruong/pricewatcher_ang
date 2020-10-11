import { Component, OnInit } from '@angular/core';
import { SCREEN_PATH } from '../../app-constants/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routers = [
    {
      link: SCREEN_PATH.HOME,
      value: 'Home',
      icon: 'home'
    },
    {
      link: SCREEN_PATH.PRODUCT,
      value: 'Your product',
      icon: 'favorite'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
