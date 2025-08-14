import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsWidget } from './statswidget';

describe('Statswidget', () => {
  let component: StatsWidget;
  let fixture: ComponentFixture<StatsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
