import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private hs: HttpService,
    private router: Router
  ) {
    this.getInfo();
  }
  public posts: Post[] = [];

  getInfo(): void{
    this.hs.request('GET', '/api/Posts')
    .subscribe(
      (data:Post[]) => {
        this.posts = data;
      },
      (error:HttpErrorResponse) => {}
    );
  }
  redirectSeen(id:number): void{
        this.router.navigate([`post/${id}`]);
  }
  ngOnInit(): void {
  }
}

