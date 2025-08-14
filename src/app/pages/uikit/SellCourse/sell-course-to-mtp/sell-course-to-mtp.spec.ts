import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseToMTP } from './sell-course-to-mtp';

describe('SellCourseToMTP', () => {
  let component: SellCourseToMTP;
  let fixture: ComponentFixture<SellCourseToMTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseToMTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseToMTP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
