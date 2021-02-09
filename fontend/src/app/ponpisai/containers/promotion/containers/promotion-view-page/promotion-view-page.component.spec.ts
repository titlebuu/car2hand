import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionViewPageComponent } from './promotion-view-page.component';

describe('PromotionViewPageComponent', () => {
  let component: PromotionViewPageComponent;
  let fixture: ComponentFixture<PromotionViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
