import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treedemo } from './treedemo';

describe('Treedemo', () => {
  let component: Treedemo;
  let fixture: ComponentFixture<Treedemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Treedemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treedemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
