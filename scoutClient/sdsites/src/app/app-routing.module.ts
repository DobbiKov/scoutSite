import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JoinComponent } from './components/join/join.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { YourAccComponent } from './components/your-acc/your-acc.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AdminUsersRequestsComponent } from './components/admin/admin-users-requests/admin-users-requests.component';
import { AdminPostsComponent } from './components/admin/admin-posts/admin-posts.component';
import { AdminPostNewComponent } from './components/admin/admin-post-new/admin-post-new.component';
import { AdminPostComponent } from './components/admin/admin-post/admin-post.component';
import { NewsPostComponent } from './components/news-post/news-post.component';
import { EditMyAccComponent } from './components/edit-my-acc/edit-my-acc.component';
import { YourAccScoutMinimumComponent } from './components/your-acc-scout-minimum/your-acc-scout-minimum.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { AdminUsersUserComponent } from './components/admin/admin-users-user/admin-users-user.component';
import { AdminUsersUserScoutMinimumComponent } from './components/admin/admin-users-user-scout-minimum/admin-users-user-scout-minimum.component';
import { NowEventsComponent } from './components/now-events/now-events.component';
import { EventsComponent } from './components/events/events.component';
import { AdminEventsComponent } from './components/admin/admin-events/admin-events.component';
import { AdminCreateEventComponent } from './components/admin/admin-create-event/admin-create-event.component';
import { AdminEditEventComponent } from './components/admin/admin-edit-event/admin-edit-event.component';
import { DocumentationPostsComponent } from './components/documentation-posts/documentation-posts.component';
import { DocumentationPostComponent } from './components/documentation-post/documentation-post.component';
import { AdminDocsComponent } from './components/admin/admin-docs/admin-docs.component';
import { AdminDocsPostsComponent } from './components/admin/admin-docs-posts/admin-docs-posts.component';
import { AdminDocsCreateComponent } from './components/admin/admin-docs-create/admin-docs-create.component';
import { AdminDocsPostCreateComponent } from './components/admin/admin-docs-post-create/admin-docs-post-create.component';
import { AdminDocsPostEditComponent } from './components/admin/admin-docs-post-edit/admin-docs-post-edit.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'join', component: JoinComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'post/:id', component: NewsPostComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'youracc', component: YourAccComponent},
  {path: 'youracc/events', component: EventsComponent},
  {path: 'youracc/now-events', component: NowEventsComponent},
  {path: 'editmyacc', component: EditMyAccComponent},
  {path: 'youracc/scout-minimum', component: YourAccScoutMinimumComponent},
  {path: 'docs', component: DocumentationComponent},
  {path: 'docs/:id', component: DocumentationPostsComponent},
  {path: 'docs/:levelid/:id', component: DocumentationPostComponent},

  {path: 'admin', component: AdminPanelComponent},
  {path: 'admins/requests', component: AdminUsersRequestsComponent},
  {path: 'admins/news', component: AdminPostsComponent},
  {path: 'admins/new/news', component: AdminPostNewComponent},
  {path: 'admins/post/:id', component: AdminPostComponent},
  {path: 'admins/users', component: AdminUsersComponent},
  {path: 'admins/users/user/:id', component: AdminUsersUserComponent},
  {path: 'admins/users/user/scout-minimum/:id', component: AdminUsersUserScoutMinimumComponent},
  {path: 'admins/docs', component: AdminDocsComponent},
  {path: 'admins/docs/create', component: AdminDocsCreateComponent},
  {path: 'admins/docs/:id', component: AdminDocsPostsComponent},
  {path: 'admins/docs/post/create/:id', component: AdminDocsPostCreateComponent},
  {path: 'admins/docs/post/edit/:id', component: AdminDocsPostEditComponent},

  {path: 'admins/events', component: AdminEventsComponent},
  {path: 'admins/events/create', component: AdminCreateEventComponent},
  {path: 'admins/events/edit/:id', component: AdminEditEventComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
