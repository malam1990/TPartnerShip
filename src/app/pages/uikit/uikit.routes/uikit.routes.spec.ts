import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UikitRoutes } from './uikit.routes';

describe('UikitRoutes', () => {
  let component: UikitRoutes;
  let fixture: ComponentFixture<UikitRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UikitRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UikitRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
