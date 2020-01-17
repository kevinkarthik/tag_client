import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeApplicationComponent } from './college-application.component';

describe('CollegeApplicationComponent', () => {
  let component: CollegeApplicationComponent;
  let fixture: ComponentFixture<CollegeApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
