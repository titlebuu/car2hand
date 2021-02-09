import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLeftPageComponent } from './navbar-left-page.component';

describe('NavbarLeftPageComponent', () => {
  let component: NavbarLeftPageComponent;
  let fixture: ComponentFixture<NavbarLeftPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLeftPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
