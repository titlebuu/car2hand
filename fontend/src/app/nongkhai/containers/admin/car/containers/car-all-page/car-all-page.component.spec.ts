import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAllPageComponent } from './car-all-page.component';

describe('CarAllPageComponent', () => {
  let component: CarAllPageComponent;
  let fixture: ComponentFixture<CarAllPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAllPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
