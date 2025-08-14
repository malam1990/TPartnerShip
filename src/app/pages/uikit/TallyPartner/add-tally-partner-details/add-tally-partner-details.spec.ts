import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTallyPartnerDetails } from './add-tally-partner-details';

describe('AddTallyPartnerDetails', () => {
  let component: AddTallyPartnerDetails;
  let fixture: ComponentFixture<AddTallyPartnerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTallyPartnerDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTallyPartnerDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
