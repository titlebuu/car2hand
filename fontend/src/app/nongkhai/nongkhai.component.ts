import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nongkhai',
  templateUrl: './nongkhai.component.html',
  styleUrls: ['./nongkhai.component.scss']
})
export class NongkhaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(event) {
    window.scroll(0, 0);
    // or document.body.scrollTop = 0;
    // or document.querySelector('body').scrollTo(0,0)
  }

}
