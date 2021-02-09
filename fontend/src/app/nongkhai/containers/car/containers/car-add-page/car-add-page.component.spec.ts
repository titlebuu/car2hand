import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddPageComponent } from './car-add-page.component';

describe('CarAddPageComponent', () => {
  let component: CarAddPageComponent;
  let fixture: ComponentFixture<CarAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
