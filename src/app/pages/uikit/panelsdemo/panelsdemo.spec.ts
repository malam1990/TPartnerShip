import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panelsdemo } from './panelsdemo';

describe('Panelsdemo', () => {
  let component: Panelsdemo;
  let fixture: ComponentFixture<Panelsdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panelsdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panelsdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
