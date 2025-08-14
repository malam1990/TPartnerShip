import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutDemo } from './formlayoutdemo';

describe('Formlayoutdemo', () => {
  let component: FormLayoutDemo;
  let fixture: ComponentFixture<FormLayoutDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLayoutDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLayoutDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
