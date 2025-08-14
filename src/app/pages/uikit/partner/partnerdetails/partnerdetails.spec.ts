import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partnerdetails } from './partnerdetails';

describe('Partnerdetails', () => {
  let component: Partnerdetails;
  let fixture: ComponentFixture<Partnerdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partnerdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partnerdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
