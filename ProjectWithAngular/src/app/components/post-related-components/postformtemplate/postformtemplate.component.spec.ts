import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormtemplateComponent } from './postformtemplate.component';

describe('PostFormtemplateComponent', () => {
  let component: PostFormtemplateComponent;
  let fixture: ComponentFixture<PostFormtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFormtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
