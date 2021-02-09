import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponpisai',
  templateUrl: './ponpisai.component.html',
  styleUrls: ['./ponpisai.component.scss']
})
export class PonpisaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(event) {
    window.scroll(0, 0);
    // or document.body.scrollTop = 0;
    // or document.querySelector('body').scrollTo(0,0)
  }
}
