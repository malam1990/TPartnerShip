import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mediademo } from './mediademo';

describe('Mediademo', () => {
  let component: Mediademo;
  let fixture: ComponentFixture<Mediademo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mediademo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mediademo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
