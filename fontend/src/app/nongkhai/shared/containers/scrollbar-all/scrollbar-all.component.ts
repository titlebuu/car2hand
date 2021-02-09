import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollbar-all',
  templateUrl: './scrollbar-all.component.html',
  styleUrls: ['./scrollbar-all.component.scss']
})
export class ScrollbarAllComponent implements OnInit {

  constructor() { }

  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')

  ngOnInit(): void {
  }

  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
