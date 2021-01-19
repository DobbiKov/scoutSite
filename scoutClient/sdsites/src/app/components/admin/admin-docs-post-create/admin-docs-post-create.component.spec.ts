import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocsPostCreateComponent } from './admin-docs-post-create.component';

describe('AdminDocsPostCreateComponent', () => {
  let component: AdminDocsPostCreateComponent;
  let fixture: ComponentFixture<AdminDocsPostCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocsPostCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocsPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
