import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTrendReportComponent } from './salary-trend-report.component';

describe('SalaryTrendReportComponent', () => {
  let component: SalaryTrendReportComponent;
  let fixture: ComponentFixture<SalaryTrendReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryTrendReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryTrendReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
