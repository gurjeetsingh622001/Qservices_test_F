import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDashComponent } from './u-dash.component';

describe('UDashComponent', () => {
  let component: UDashComponent;
  let fixture: ComponentFixture<UDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
