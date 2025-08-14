import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timelinedemo } from './timelinedemo';

describe('Timelinedemo', () => {
  let component: Timelinedemo;
  let fixture: ComponentFixture<Timelinedemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timelinedemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timelinedemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
