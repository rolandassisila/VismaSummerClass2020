import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifebodyComponent } from './lifebody.component';

describe('LifebodyComponent', () => {
  let component: LifebodyComponent;
  let fixture: ComponentFixture<LifebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
