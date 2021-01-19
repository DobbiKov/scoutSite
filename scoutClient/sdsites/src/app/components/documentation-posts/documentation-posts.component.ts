import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocsLevelsPost } from '../../models/docslevelspost';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-documentation-posts',
  templateUrl: './documentation-posts.component.html',
  styleUrls: ['./documentation-posts.component.scss']
})
export class DocumentationPostsComponent implements OnInit {

  constructor(
    private router: Router,
    private hs: HttpService,
    private activateRoute: ActivatedRoute,
    private as: AuthService
  ) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getPosts();
   }

  public isLoggedIn: boolean = !!this.as.isAuthenticated();
  public id: number;
  public posts: DocsLevelsPost[];

  getPosts(): void{
    this.hs.request('GET', `/api/DocsLevelPosts/ByDocsLevel/${this.id}`).subscribe(
      (data: DocsLevelsPost[]) => {this.posts = data;},
      (error: HttpErrorResponse) => {}
    );
  }
  redirect(id: number): void{
    this.router.navigate([`/docs/${this.id}/${id}`]);
  }

  ngOnInit() {
  }

}
