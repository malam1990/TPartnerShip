import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricingwidget } from './pricingwidget';

describe('Pricingwidget', () => {
  let component: Pricingwidget;
  let fixture: ComponentFixture<Pricingwidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pricingwidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pricingwidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
