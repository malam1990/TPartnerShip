import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyPartnerdetails } from './tally-partnerdetails';

describe('TallyPartnerdetails', () => {
  let component: TallyPartnerdetails;
  let fixture: ComponentFixture<TallyPartnerdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyPartnerdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyPartnerdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
