import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcoursequantity } from './addcoursequantity';

describe('Addcoursequantity', () => {
  let component: Addcoursequantity;
  let fixture: ComponentFixture<Addcoursequantity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addcoursequantity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addcoursequantity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
