import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Companydetails } from './companydetails';

describe('Companydetails', () => {
  let component: Companydetails;
  let fixture: ComponentFixture<Companydetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Companydetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Companydetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
