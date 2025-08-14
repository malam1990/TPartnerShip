import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentAdmission } from './add-student-admission';

describe('AddStudentAdmission', () => {
  let component: AddStudentAdmission;
  let fixture: ComponentFixture<AddStudentAdmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudentAdmission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentAdmission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
