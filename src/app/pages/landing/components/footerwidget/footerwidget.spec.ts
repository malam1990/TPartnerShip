import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerwidget } from './footerwidget';

describe('Footerwidget', () => {
  let component: Footerwidget;
  let fixture: ComponentFixture<Footerwidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerwidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerwidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
