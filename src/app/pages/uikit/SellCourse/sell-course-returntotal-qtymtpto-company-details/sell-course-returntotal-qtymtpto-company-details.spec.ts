import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseReturntotalQtymtptoCompanyDetails } from './sell-course-returntotal-qtymtpto-company-details';

describe('SellCourseReturntotalQtymtptoCompanyDetails', () => {
  let component: SellCourseReturntotalQtymtptoCompanyDetails;
  let fixture: ComponentFixture<SellCourseReturntotalQtymtptoCompanyDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseReturntotalQtymtptoCompanyDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseReturntotalQtymtptoCompanyDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
