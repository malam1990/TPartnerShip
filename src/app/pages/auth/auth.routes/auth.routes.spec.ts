import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRoutes } from './auth.routes';

describe('AuthRoutes', () => {
  let component: AuthRoutes;
  let fixture: ComponentFixture<AuthRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
