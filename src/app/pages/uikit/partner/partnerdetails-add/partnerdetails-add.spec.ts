import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerdetailsAdd } from './partnerdetails-add';

describe('PartnerdetailsAdd', () => {
  let component: PartnerdetailsAdd;
  let fixture: ComponentFixture<PartnerdetailsAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerdetailsAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerdetailsAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
