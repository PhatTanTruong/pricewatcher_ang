import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SCREEN_PATH } from '../../app/core/shared/app-constants/app.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  isShowHeader = false;

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isShowHeader =
          e.urlAfterRedirects === `/${SCREEN_PATH.LOGIN}` || e.urlAfterRedirects === `/${SCREEN_PATH.RESGISTER}`;
      }
    });
  }
}
