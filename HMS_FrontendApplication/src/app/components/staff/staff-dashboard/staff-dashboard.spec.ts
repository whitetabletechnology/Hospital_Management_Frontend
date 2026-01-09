import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDashboard } from './staff-dashboard';

describe('StaffDashboard', () => {
  let component: StaffDashboard;
  let fixture: ComponentFixture<StaffDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
