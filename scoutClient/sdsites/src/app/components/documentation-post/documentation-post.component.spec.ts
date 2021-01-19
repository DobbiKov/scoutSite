import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPostComponent } from './documentation-post.component';

describe('DocumentationPostComponent', () => {
  let component: DocumentationPostComponent;
  let fixture: ComponentFixture<DocumentationPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
