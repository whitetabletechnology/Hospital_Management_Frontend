import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verifyotp } from './verifyotp';

describe('Verifyotp', () => {
  let component: Verifyotp;
  let fixture: ComponentFixture<Verifyotp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Verifyotp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verifyotp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
