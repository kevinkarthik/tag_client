import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIndiaBoardComponent } from './all-india-board.component';

describe('AllIndiaBoardComponent', () => {
  let component: AllIndiaBoardComponent;
  let fixture: ComponentFixture<AllIndiaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIndiaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIndiaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
