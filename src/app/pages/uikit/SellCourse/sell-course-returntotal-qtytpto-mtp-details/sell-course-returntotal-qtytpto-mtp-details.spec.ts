import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseReturntotalQtytptoMtpDetails } from './sell-course-returntotal-qtytpto-mtp-details';

describe('SellCourseReturntotalQtytptoMtpDetails', () => {
  let component: SellCourseReturntotalQtytptoMtpDetails;
  let fixture: ComponentFixture<SellCourseReturntotalQtytptoMtpDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseReturntotalQtytptoMtpDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseReturntotalQtytptoMtpDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
