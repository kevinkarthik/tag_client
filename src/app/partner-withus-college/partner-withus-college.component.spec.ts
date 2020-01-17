import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWithusCollegeComponent } from './partner-withus-college.component';

describe('PartnerWithusCollegeComponent', () => {
  let component: PartnerWithusCollegeComponent;
  let fixture: ComponentFixture<PartnerWithusCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerWithusCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerWithusCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
