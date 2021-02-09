import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-view-page',
  templateUrl: './about-view-page.component.html',
  styleUrls: ['./about-view-page.component.scss']
})
export class AboutViewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scrollToView();
  }

  scrollToView(): void {
    if (window.innerWidth < 991) {
      window.scroll({
        top: 825,
        behavior: 'smooth'
      });
    }
  }
}
