import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStreamWidget } from './revenuestreamwidget';

describe('Revenuestreamwidget', () => {
  let component: RevenueStreamWidget;
  let fixture: ComponentFixture<RevenueStreamWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueStreamWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueStreamWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
