import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent implements OnInit {

  private id: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private hs: HttpService
  ) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    // this.id = Number(this.router.parseUrl.arguments.get('id'));
    this.getInfo();
  }
  public post: Post;
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
