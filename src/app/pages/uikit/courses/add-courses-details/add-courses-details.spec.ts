import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursesDetails } from './add-courses-details';

describe('AddCoursesDetails', () => {
  let component: AddCoursesDetails;
  let fixture: ComponentFixture<AddCoursesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCoursesDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoursesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
