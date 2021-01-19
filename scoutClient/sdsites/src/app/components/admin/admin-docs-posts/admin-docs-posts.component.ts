import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocsLevelsPost } from '../../../models/docslevelspost';
import { AuthService } from '../../../services/auth.service';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admin-docs-posts',
  templateUrl: './admin-docs-posts.component.html',
  styleUrls: ['./admin-docs-posts.component.scss']
})
export class AdminDocsPostsComponent implements OnInit {

  constructor(
    private router: Router,
    private hs: HttpService,
    private activateRoute: ActivatedRoute,
    private as: AuthService
  ) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getPosts();
   }

  public id: number;
  public posts: DocsLevelsPost[];
  public isLoggedIn: boolean = !!this.as.isAuthenticated();

  getPosts(): void{
    this.hs.request('GET', `/api/DocsLevelPosts/ByDocsLevel/${this.id}`).subscribe(
      (data: DocsLevelsPost[]) => {this.posts = data;},
      (error: HttpErrorResponse) => {}
    );
  }
  redirect(id: number): void{
    this.router.navigate([`/docs/${this.id}/${id}`]);
  }

  delete(id: number): void{
    this.hs.request('DELETE', `/api/DocsLevelPosts/Delete/${id}`).subscribe(
      (data: DocsLevelsPost) => {this.getPosts()},
      (error: HttpErrorResponse) => {}
    );
  }
  edit(id: number): void{
    this.router.navigate([`/admins/docs/post/edit/${id}`]);
  }
  createPost(): void{
    this.router.navigate([`/admins/docs/post/create/${this.id}`]);
  }

  ngOnInit() {
  }

}
