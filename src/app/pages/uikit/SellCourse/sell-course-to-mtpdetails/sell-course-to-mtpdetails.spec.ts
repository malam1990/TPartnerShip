import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseToMTPDetails } from './sell-course-to-mtpdetails';

describe('SellCourseToMTPDetails', () => {
  let component: SellCourseToMTPDetails;
  let fixture: ComponentFixture<SellCourseToMTPDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseToMTPDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseToMTPDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
