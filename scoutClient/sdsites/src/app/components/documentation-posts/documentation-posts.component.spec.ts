import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPostsComponent } from './documentation-posts.component';

describe('DocumentationPostsComponent', () => {
  let component: DocumentationPostsComponent;
  let fixture: ComponentFixture<DocumentationPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
