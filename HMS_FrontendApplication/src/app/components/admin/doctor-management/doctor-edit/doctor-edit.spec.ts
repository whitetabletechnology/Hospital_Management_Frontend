import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEdit } from './doctor-edit';

describe('DoctorEdit', () => {
  let component: DoctorEdit;
  let fixture: ComponentFixture<DoctorEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
