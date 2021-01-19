import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostNewComponent } from './admin-post-new.component';

describe('AdminPostNewComponent', () => {
  let component: AdminPostNewComponent;
  let fixture: ComponentFixture<AdminPostNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
