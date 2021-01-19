import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../models/post';
import { AuthService } from '../../../services/auth.service';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-post-new',
  templateUrl: './admin-post-new.component.html',
  styleUrls: ['./admin-post-new.component.scss']
})
export class AdminPostNewComponent implements OnInit {

  constructor(
    private router: Router, 
    private hs: HttpService, 
    private us: UserService,
    private as: AuthService
  ) { }

  newPost(title: string, stext: string, text: string): void {
    if(this.as.isAuthenticated() == false) 
      return;
    this.hs.request('POST', '/api/Posts/Create', {Title: title, ShortText: stext, Text: text, WriterId: this.us.user.id})
    .subscribe(
      (data:Post) => {this.router.navigate(['admins/news'])},
      (error: HttpErrorResponse) => {}
    );
  };

  ngOnInit(): void {
  }

}
