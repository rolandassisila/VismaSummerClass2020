import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformtemplateComponent } from './editformtemplate.component';

describe('EditformtemplateComponent', () => {
  let component: EditformtemplateComponent;
  let fixture: ComponentFixture<EditformtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
