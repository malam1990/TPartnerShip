import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsWidget } from './notificationswidget';

describe('Notificationswidget', () => {
  let component: NotificationsWidget;
  let fixture: ComponentFixture<NotificationsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
