import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listdemo } from './listdemo';

describe('Listdemo', () => {
  let component: Listdemo;
  let fixture: ComponentFixture<Listdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
