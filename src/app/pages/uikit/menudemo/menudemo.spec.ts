import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDemo } from './menudemo';

describe('Menudemo', () => {
  let component: MenuDemo;
  let fixture: ComponentFixture<MenuDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
