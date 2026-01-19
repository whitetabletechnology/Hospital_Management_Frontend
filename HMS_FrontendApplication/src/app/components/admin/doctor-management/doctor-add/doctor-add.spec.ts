import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAdd } from './doctor-add';

describe('DoctorAdd', () => {
  let component: DoctorAdd;
  let fixture: ComponentFixture<DoctorAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
