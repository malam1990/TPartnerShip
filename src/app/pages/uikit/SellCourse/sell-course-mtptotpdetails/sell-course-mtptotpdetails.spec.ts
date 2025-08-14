import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseMtptotpdetails } from './sell-course-mtptotpdetails';

describe('SellCourseMtptotpdetails', () => {
  let component: SellCourseMtptotpdetails;
  let fixture: ComponentFixture<SellCourseMtptotpdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseMtptotpdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseMtptotpdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
