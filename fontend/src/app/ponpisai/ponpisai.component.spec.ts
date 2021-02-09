import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonpisaiComponent } from './ponpisai.component';

describe('PonpisaiComponent', () => {
  let component: PonpisaiComponent;
  let fixture: ComponentFixture<PonpisaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonpisaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonpisaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
