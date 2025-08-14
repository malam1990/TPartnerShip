import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseToTP } from './sell-course-to-tp';

describe('SellCourseToTP', () => {
  let component: SellCourseToTP;
  let fixture: ComponentFixture<SellCourseToTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseToTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseToTP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
