import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralpostslifeComponent } from './generalpostslife.component';

describe('GeneralpostslifeComponent', () => {
  let component: GeneralpostslifeComponent;
  let fixture: ComponentFixture<GeneralpostslifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralpostslifeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralpostslifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
