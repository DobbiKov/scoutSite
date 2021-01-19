import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAccNavComponent } from './your-acc-nav.component';

describe('YourAccNavComponent', () => {
  let component: YourAccNavComponent;
  let fixture: ComponentFixture<YourAccNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAccNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAccNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
