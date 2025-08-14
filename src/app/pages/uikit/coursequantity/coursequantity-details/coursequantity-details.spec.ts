import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursequantityDetails } from './coursequantity-details';

describe('CoursequantityDetails', () => {
  let component: CoursequantityDetails;
  let fixture: ComponentFixture<CoursequantityDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursequantityDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursequantityDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
