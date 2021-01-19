import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocsLevels } from '../../models/docslevels';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  constructor(
    private us: UserService,
    private as: AuthService,
    private hs: HttpService,
    private router: Router) { 
      this.getDocsLevels();
    }

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }

  public docs: DocsLevels[];

  getDocsLevels(): void{
    this.hs.request('GET', '/api/DocsLevels').subscribe(
      (data: DocsLevels[]) => {this.docs = data},
      (error: HttpErrorResponse) => {}
    )
  }
  redirect(id: number){
    this.router.navigate([`/docs/${id}`]);
  }

  ngOnInit(): void {
  }

}
