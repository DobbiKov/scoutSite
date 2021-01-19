import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAccScoutMinimumComponent } from './your-acc-scout-minimum.component';

describe('YourAccScoutMinimumComponent', () => {
  let component: YourAccScoutMinimumComponent;
  let fixture: ComponentFixture<YourAccScoutMinimumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAccScoutMinimumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAccScoutMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
