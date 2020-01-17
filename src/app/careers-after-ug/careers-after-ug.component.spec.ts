import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAfterUgComponent } from './careers-after-ug.component';

describe('CareersAfterUgComponent', () => {
  let component: CareersAfterUgComponent;
  let fixture: ComponentFixture<CareersAfterUgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersAfterUgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersAfterUgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
