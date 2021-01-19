import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocsPostsComponent } from './admin-docs-posts.component';

describe('AdminDocsPostsComponent', () => {
  let component: AdminDocsPostsComponent;
  let fixture: ComponentFixture<AdminDocsPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocsPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
