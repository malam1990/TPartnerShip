import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseReturntptoMtpDetails } from './sell-course-returntpto-mtp-details';

describe('SellCourseReturntptoMtpDetails', () => {
  let component: SellCourseReturntptoMtpDetails;
  let fixture: ComponentFixture<SellCourseReturntptoMtpDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseReturntptoMtpDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseReturntptoMtpDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
