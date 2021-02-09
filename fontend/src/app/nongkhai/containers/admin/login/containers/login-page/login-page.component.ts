import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ROUTE_CAR_ALL } from './../../../car/constants/route-path.constant';
import { LINK_NONGKHAI } from './../../../../../shared/constants/data.constant';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  msg: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.msg = '';
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate([ROUTE_CAR_ALL]);
    } else {
      this.msg = 'ชื่อผู้ใช้/รหัสผ่านไม่ถูกต้อง';
      this.router.navigate([`/${LINK_NONGKHAI}/admin/login`]);
    }
  }
}
