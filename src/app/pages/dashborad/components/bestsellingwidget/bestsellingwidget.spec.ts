import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingWidget } from './bestsellingwidget';

describe('Bestsellingwidget', () => {
  let component: BestSellingWidget;
  let fixture: ComponentFixture<BestSellingWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
