import { Component, OnInit } from '@angular/core';
import { LINK_LINE, LINK_MESSANGER } from './../../../../shared/constants/data.constant';
import { HttpService } from './../../../../shared/services/http.service';

@Component({
  selector: 'app-contact-view-page',
  templateUrl: './contact-view-page.component.html',
  styleUrls: ['./contact-view-page.component.scss']
})
export class ContactViewPageComponent implements OnInit {

  typeAddress = 0;
  formName: string;
  formTels: string;
  formID: string;
  formDesc: string;
  msgDisplay: string;

  constructor(
    private httpService: HttpService
  ) { }

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

  toLine() {
    window.open(LINK_LINE, '_blank');
  }

  submit() {
    this.httpService
      .post(`/api/mailer`, {
        name: this.formName,
        tel: this.formTels,
        line: this.formID,
        detail: this.formDesc,
      })
      .then((res) => {
        console.log(JSON.stringify(res));
        this.msgDisplay = 'ส่งข้อมูลเรียบร้อย ทางเราจะติดต่อกลับให้เร็วที่สุด';
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        this.msgDisplay = 'ส่งข้อมูลผิดพลาด ระบบมีปัญหา';
      });
  }

  clear() {
    this.formName = '';
    this.formTels = '';
    this.formID = '';
    this.formDesc = '';
    this.msgDisplay = '';
  }
}
