import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overlaydemo } from './overlaydemo';

describe('Overlaydemo', () => {
  let component: Overlaydemo;
  let fixture: ComponentFixture<Overlaydemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overlaydemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overlaydemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
