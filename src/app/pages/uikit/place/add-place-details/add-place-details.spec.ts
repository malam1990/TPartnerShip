import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceDetails } from './add-place-details';

describe('AddPlaceDetails', () => {
  let component: AddPlaceDetails;
  let fixture: ComponentFixture<AddPlaceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlaceDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlaceDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
