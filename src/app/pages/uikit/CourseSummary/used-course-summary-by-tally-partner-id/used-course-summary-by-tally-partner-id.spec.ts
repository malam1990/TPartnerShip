import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCourseSummaryByTallyPartnerId } from './used-course-summary-by-tally-partner-id';

describe('UsedCourseSummaryByTallyPartnerId', () => {
  let component: UsedCourseSummaryByTallyPartnerId;
  let fixture: ComponentFixture<UsedCourseSummaryByTallyPartnerId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedCourseSummaryByTallyPartnerId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedCourseSummaryByTallyPartnerId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
