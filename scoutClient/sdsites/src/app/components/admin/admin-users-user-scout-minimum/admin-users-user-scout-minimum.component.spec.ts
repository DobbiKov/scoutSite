import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUserScoutMinimumComponent } from './admin-users-user-scout-minimum.component';

describe('AdminUsersUserScoutMinimumComponent', () => {
  let component: AdminUsersUserScoutMinimumComponent;
  let fixture: ComponentFixture<AdminUsersUserScoutMinimumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUserScoutMinimumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUserScoutMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
