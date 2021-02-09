import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarViewPageComponent } from './car-view-page.component';

describe('CarViewPageComponent', () => {
  let component: CarViewPageComponent;
  let fixture: ComponentFixture<CarViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
