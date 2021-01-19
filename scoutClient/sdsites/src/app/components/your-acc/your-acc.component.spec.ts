import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAccComponent } from './your-acc.component';

describe('YourAccComponent', () => {
  let component: YourAccComponent;
  let fixture: ComponentFixture<YourAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
