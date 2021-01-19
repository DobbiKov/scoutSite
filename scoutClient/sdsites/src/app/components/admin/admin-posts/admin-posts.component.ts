import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../models/post';
import { AuthService } from '../../../services/auth.service';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  constructor(
    private hs: HttpService,
    private us: UserService,
    private router: Router
  ) { 
    this.getInfo();
  }
  public posts: Post[] = [];
  public get isAdmin(): boolean {
    return this.us.role.isAdmin;
  }

  getInfo(): void{
    this.hs.request('GET', '/api/Posts')
    .subscribe(
      (data:Post[]) => {
        this.posts = data;
      },
      (error:HttpErrorResponse) => {}
    );
  }
  delete(id: number): void{
    this.hs.request('DELETE', `/api/Posts/Delete/${id}`)
    .subscribe(
      (data:Post) => {
        this.getInfo();
      },
      (error:HttpErrorResponse) => {}
    )
  }
  redirect(id:number): void{
        this.router.navigate([`admins/post/${id}`]);
  }
  redirectSeen(id:number): void{
        this.router.navigate([`post/${id}`]);
  }
  ngOnInit(): void {
  }

}
