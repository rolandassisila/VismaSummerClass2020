import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralpostshomeComponent } from './generalpostshome.component';

describe('GeneralpostshomeComponent', () => {
  let component: GeneralpostshomeComponent;
  let fixture: ComponentFixture<GeneralpostshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralpostshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralpostshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
