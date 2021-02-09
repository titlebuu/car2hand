import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsViewPageComponent } from './reviews-view-page.component';

describe('ReviewsViewPageComponent', () => {
  let component: ReviewsViewPageComponent;
  let fixture: ComponentFixture<ReviewsViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
