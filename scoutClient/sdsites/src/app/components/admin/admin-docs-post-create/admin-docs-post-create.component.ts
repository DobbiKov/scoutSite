import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocsLevelsPost } from '../../../models/docslevelspost';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-docs-post-create',
  templateUrl: './admin-docs-post-create.component.html',
  styleUrls: ['./admin-docs-post-create.component.scss']
})
export class AdminDocsPostCreateComponent implements OnInit {

  constructor(
    private actvatedRoute: ActivatedRoute,
    private hs: HttpService,
    private us: UserService,
    private router: Router
  ) { 
    this.id = Number(actvatedRoute.snapshot.paramMap.get('id'));
  }

  public id: number;

  create(name: string, text: string): void{
    this.hs.request('POST', '/api/DocsLevelPosts/Create', {Name: name, Text: text, WriterId: this.us.user.id, DocsLevelId: this.id}).subscribe(
      (data: DocsLevelsPost) => {this.router.navigate([`/admins/docs/${this.id}`])},
      (error: HttpErrorResponse) => {}
    );
  }

  ngOnInit() {
  }

}
