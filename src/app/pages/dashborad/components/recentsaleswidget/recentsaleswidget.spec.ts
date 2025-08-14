import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSalesWidget } from './recentsaleswidget';

describe('Recentsaleswidget', () => {
  let component: RecentSalesWidget;
  let fixture: ComponentFixture<RecentSalesWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSalesWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSalesWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
