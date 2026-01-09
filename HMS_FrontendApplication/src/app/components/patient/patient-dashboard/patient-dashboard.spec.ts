import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboard } from './patient-dashboard';

describe('PatientDashboard', () => {
  let component: PatientDashboard;
  let fixture: ComponentFixture<PatientDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
