import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post';
import { AuthService } from '../../../services/auth.service';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.scss']
})
export class AdminPostComponent implements OnInit {
  private id: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,  
    private hs: HttpService, 
    private us: UserService,
    private as: AuthService,
  ) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    // this.id = Number(this.router.parseUrl.arguments.get('id'));
    this.getInfo();
  }
  public post: Post;

  newPost(title: string, stext: string, text: string): void {
    if(this.as.isAuthenticated() == false) 
      return;
    this.hs.request('PUT', `/api/Posts/Update/${this.id}`, {Title: title, ShortText: stext, Text: text, WriterId: this.us.user.id, Id: this.id})
    .subscribe(
      (data:Post) => {this.router.navigate(['admins/news'])},
      (error: HttpErrorResponse) => {}
    );
  };
  getInfo(): void{
    this.hs.request('GET', `/api/Posts/${this.id}`)
    .subscribe(
      (data:Post) => {this.post = data;},
      (error:HttpErrorResponse) => {}
    );
  }

  ngOnInit(): void {
  }

}
