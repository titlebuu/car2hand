import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutViewPageComponent } from './about-view-page.component';

describe('AboutViewPageComponent', () => {
  let component: AboutViewPageComponent;
  let fixture: ComponentFixture<AboutViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
