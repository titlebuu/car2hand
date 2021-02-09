import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NongkhaiComponent } from './nongkhai.component';

describe('NongkhaiComponent', () => {
  let component: NongkhaiComponent;
  let fixture: ComponentFixture<NongkhaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NongkhaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NongkhaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
