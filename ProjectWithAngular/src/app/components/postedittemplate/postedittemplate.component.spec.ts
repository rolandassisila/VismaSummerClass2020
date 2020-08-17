import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedittemplateComponent } from './postedittemplate.component';

describe('PostedittemplateComponent', () => {
  let component: PostedittemplateComponent;
  let fixture: ComponentFixture<PostedittemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedittemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedittemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
