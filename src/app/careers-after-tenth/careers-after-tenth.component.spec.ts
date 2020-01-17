import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAfterTenthComponent } from './careers-after-tenth.component';

describe('CareersAfterTenthComponent', () => {
  let component: CareersAfterTenthComponent;
  let fixture: ComponentFixture<CareersAfterTenthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersAfterTenthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersAfterTenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
