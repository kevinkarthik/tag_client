import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAfterPgComponent } from './careers-after-pg.component';

describe('CareersAfterPgComponent', () => {
  let component: CareersAfterPgComponent;
  let fixture: ComponentFixture<CareersAfterPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersAfterPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersAfterPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
