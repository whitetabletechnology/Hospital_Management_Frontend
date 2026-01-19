import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorList } from './doctor-list';

describe('DoctorList', () => {
  let component: DoctorList;
  let fixture: ComponentFixture<DoctorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
