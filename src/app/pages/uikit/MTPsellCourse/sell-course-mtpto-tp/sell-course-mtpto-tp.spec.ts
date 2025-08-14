import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCourseMTPToTP } from './sell-course-mtpto-tp';

describe('SellCourseMTPToTP', () => {
  let component: SellCourseMTPToTP;
  let fixture: ComponentFixture<SellCourseMTPToTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCourseMTPToTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCourseMTPToTP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
