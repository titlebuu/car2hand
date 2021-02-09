import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {
  LINK_FACEBOOK,
  LINK_LINE,
  LINK_EMAIL,
  LINK_NONGKHAI
} from './../../constants/data.constant';
// import { TransactionService } from './../../../shared/services/transaction.service';
// import { Itransactions } from './../../../shared/services/models/util';
import { LINK_PHONPHISAI } from './../../../../ponpisai/shared/constants/data.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})
export class NavbarPageComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;
  routeActive = '';
  // transactions: Itransactions;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private transactionService: TransactionService<Itransactions>
  ) {
    // this.transactions = this.transactionService.load() || {};
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          // debugger
          // if (
          //   event.url === '/car/ponpisai/list' ||
          //   event.url === '/car/ponpisai/list' ||
          //   event.url === '/car/nongkhai/view' ||
          //   event.url === '/car/nongkhai/view'
          // ) {
          this.routeActive = event.url;
          // this.transactions.branch = this.getBranch(event.url);
          // }
        }
      });
  }

  ngOnInit(): void {
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  toFacebook() {
    window.open(LINK_FACEBOOK, '_blank');
  }

  toLine() {
    window.open(LINK_LINE, '_blank');
  }

  toMail() {
    window.open(LINK_EMAIL, '_blank');
  }

  ponpisai() {
    window.location.href = `https://www.ruaysombatcar.com/${LINK_PHONPHISAI}`;
  }

  nongkhai() {
    window.location.href = `https://www.ruaysombatcar.com/${LINK_NONGKHAI}`;
  }

}
