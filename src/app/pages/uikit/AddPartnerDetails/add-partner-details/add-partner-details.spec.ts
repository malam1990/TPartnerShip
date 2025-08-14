import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartnerDetails } from './add-partner-details';

describe('AddPartnerDetails', () => {
  let component: AddPartnerDetails;
  let fixture: ComponentFixture<AddPartnerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPartnerDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPartnerDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
