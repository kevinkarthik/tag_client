import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeComparisionComponent } from './college-comparision.component';

describe('CollegeComparisionComponent', () => {
  let component: CollegeComparisionComponent;
  let fixture: ComponentFixture<CollegeComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
