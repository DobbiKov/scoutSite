import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocsComponent } from './admin-docs.component';

describe('AdminDocsComponent', () => {
  let component: AdminDocsComponent;
  let fixture: ComponentFixture<AdminDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
