import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocsCreateComponent } from './admin-docs-create.component';

describe('AdminDocsCreateComponent', () => {
  let component: AdminDocsCreateComponent;
  let fixture: ComponentFixture<AdminDocsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
