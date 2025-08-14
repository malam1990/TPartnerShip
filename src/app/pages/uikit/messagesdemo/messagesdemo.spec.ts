import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messagesdemo } from './messagesdemo';

describe('Messagesdemo', () => {
  let component: Messagesdemo;
  let fixture: ComponentFixture<Messagesdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messagesdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messagesdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
