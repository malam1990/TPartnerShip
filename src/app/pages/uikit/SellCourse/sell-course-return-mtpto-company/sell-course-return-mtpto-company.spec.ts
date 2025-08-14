import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseReturnMtptoCompany } from './sell-course-return-mtpto-company';

describe('SellCourseReturnMtptoCompany', () => {
  let component: SellCourseReturnMtptoCompany;
  let fixture: ComponentFixture<SellCourseReturnMtptoCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseReturnMtptoCompany]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseReturnMtptoCompany);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
