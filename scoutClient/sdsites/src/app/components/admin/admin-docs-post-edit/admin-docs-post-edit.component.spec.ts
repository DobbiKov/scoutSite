import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocsPostEditComponent } from './admin-docs-post-edit.component';

describe('AdminDocsPostEditComponent', () => {
  let component: AdminDocsPostEditComponent;
  let fixture: ComponentFixture<AdminDocsPostEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocsPostEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocsPostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
