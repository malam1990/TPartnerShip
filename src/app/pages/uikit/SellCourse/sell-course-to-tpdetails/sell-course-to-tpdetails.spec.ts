import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseToTPDetails } from './sell-course-to-tpdetails';

describe('SellCourseToTPDetails', () => {
  let component: SellCourseToTPDetails;
  let fixture: ComponentFixture<SellCourseToTPDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseToTPDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseToTPDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
