import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miscdemo } from './miscdemo';

describe('Miscdemo', () => {
  let component: Miscdemo;
  let fixture: ComponentFixture<Miscdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Miscdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Miscdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
