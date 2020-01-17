import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularStateBoardComponent } from './regular-state-board.component';

describe('RegularStateBoardComponent', () => {
  let component: RegularStateBoardComponent;
  let fixture: ComponentFixture<RegularStateBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularStateBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularStateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
