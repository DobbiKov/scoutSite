import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DocsLevelsPost } from '../../models/docslevelspost';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-documentation-post',
  templateUrl: './documentation-post.component.html',
  styleUrls: ['./documentation-post.component.scss']
})
export class DocumentationPostComponent implements OnInit {

  constructor(
    private hs: HttpService,
    private activeRoute: ActivatedRoute
  ) { 
    this.id = Number(activeRoute.snapshot.paramMap.get('id'));
    this.getPost();
  }

  public id: number;
  public post: DocsLevelsPost;

  getPost(): void{
    this.hs.request('GET', `/api/DocsLevelPosts/${this.id}`).subscribe(
      (data: DocsLevelsPost) => {this.post = data;},
      (error: HttpErrorResponse) => {}
    );
  };

  ngOnInit() {
  }

}
