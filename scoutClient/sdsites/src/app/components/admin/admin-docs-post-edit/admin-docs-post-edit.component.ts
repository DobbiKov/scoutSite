import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { DocsLevelsPost } from '../../../models/docslevelspost';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-docs-post-edit',
  templateUrl: './admin-docs-post-edit.component.html',
  styleUrls: ['./admin-docs-post-edit.component.scss']
})
export class AdminDocsPostEditComponent implements OnInit {

  constructor(
    private hs: HttpService,
    private activeRoute: ActivatedRoute,
    private router: Router
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

  update(name: string, text: string): void {
    this.hs.request('PUT', `/api/DocsLevelPosts/Update/${this.post.id}`, {Id: this.post.id, Name: name, Text: text, WriterId: this.post.writerId, DocsLevelId: this.post.docsLevelId}).subscribe(
      (data: DocsLevelsPost) => {this.router.navigate([`/admins/docs/${this.post.docsLevelId}`])}
    );
  }

  ngOnInit() {
  }

}
