import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaypostsComponent } from './holidayposts.component';

describe('HolidaypostsComponent', () => {
  let component: HolidaypostsComponent;
  let fixture: ComponentFixture<HolidaypostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HolidaypostsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
