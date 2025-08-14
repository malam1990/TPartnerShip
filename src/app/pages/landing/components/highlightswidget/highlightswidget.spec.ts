import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highlightswidget } from './highlightswidget';

describe('Highlightswidget', () => {
  let component: Highlightswidget;
  let fixture: ComponentFixture<Highlightswidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Highlightswidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Highlightswidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
