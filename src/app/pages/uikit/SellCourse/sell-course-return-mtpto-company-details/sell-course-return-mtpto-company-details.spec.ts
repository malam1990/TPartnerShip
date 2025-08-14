import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseReturnMtptoCompanyDetails } from './sell-course-return-mtpto-company-details';

describe('SellCourseReturnMtptoCompanyDetails', () => {
  let component: SellCourseReturnMtptoCompanyDetails;
  let fixture: ComponentFixture<SellCourseReturnMtptoCompanyDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseReturnMtptoCompanyDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseReturnMtptoCompanyDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
