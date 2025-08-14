import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseReturntptoMtp } from './sell-course-returntpto-mtp';

describe('SellCourseReturntptoMtp', () => {
  let component: SellCourseReturntptoMtp;
  let fixture: ComponentFixture<SellCourseReturntptoMtp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseReturntptoMtp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseReturntptoMtp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
