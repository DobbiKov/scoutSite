import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocsLevelsPost } from '../../../models/docslevelspost';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admin-docs-create',
  templateUrl: './admin-docs-create.component.html',
  styleUrls: ['./admin-docs-create.component.scss']
})
export class AdminDocsCreateComponent implements OnInit {

  constructor(
    private hs: HttpService,
    private router: Router
  ) { }

  create(name: string) {
    this.hs.request('POST', '/api/DocsLevels/Create', {Name: name}).subscribe(
      (data: DocsLevelsPost) => {this.router.navigate(['/admins/docs'])},
      (error: HttpErrorResponse) => {}
    );
  }

  ngOnInit() {
  }

}
