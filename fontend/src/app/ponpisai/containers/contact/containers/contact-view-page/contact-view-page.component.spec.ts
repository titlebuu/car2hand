import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewPageComponent } from './contact-view-page.component';

describe('ContactViewPageComponent', () => {
  let component: ContactViewPageComponent;
  let fixture: ComponentFixture<ContactViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
