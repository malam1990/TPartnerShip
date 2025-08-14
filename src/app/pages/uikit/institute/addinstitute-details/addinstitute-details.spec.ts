import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinstituteDetails } from './addinstitute-details';

describe('AddinstituteDetails', () => {
  let component: AddinstituteDetails;
  let fixture: ComponentFixture<AddinstituteDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddinstituteDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinstituteDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
