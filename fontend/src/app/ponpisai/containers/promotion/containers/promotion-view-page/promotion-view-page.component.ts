import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-view-page',
  templateUrl: './promotion-view-page.component.html',
  styleUrls: ['./promotion-view-page.component.scss']
})
export class PromotionViewPageComponent implements OnInit {

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

  toFacebook() {
    window.open('https://web.facebook.com/ruaysombatcar/?epa=SEARCH_BOX', '_blank');
  }
}
