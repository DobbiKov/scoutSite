import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyAccComponent } from './edit-my-acc.component';

describe('EditMyAccComponent', () => {
  let component: EditMyAccComponent;
  let fixture: ComponentFixture<EditMyAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMyAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
