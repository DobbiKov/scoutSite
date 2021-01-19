import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MainComponent } from './components/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NewsComponent } from './components/news/news.component';
import { JoinComponent } from './components/join/join.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { YourAccComponent } from './components/your-acc/your-acc.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminUsersRequestsComponent } from './components/admin/admin-users-requests/admin-users-requests.component';
import { AdminPostComponent } from './components/admin/admin-post/admin-post.component';
import { AdminPostsComponent } from './components/admin/admin-posts/admin-posts.component';
import { AdminPostNewComponent } from './components/admin/admin-post-new/admin-post-new.component';
import { NewsPostComponent } from './components/news-post/news-post.component';
import { EditMyAccComponent } from './components/edit-my-acc/edit-my-acc.component';
import { YourAccScoutMinimumComponent } from './components/your-acc-scout-minimum/your-acc-scout-minimum.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { AdminUsersUserComponent } from './components/admin/admin-users-user/admin-users-user.component';
import { AdminUsersUserScoutMinimumComponent } from './components/admin/admin-users-user-scout-minimum/admin-users-user-scout-minimum.component';
import { EventsComponent } from './components/events/events.component';
import { NowEventsComponent } from './components/now-events/now-events.component';
import { AdminEventsComponent } from './components/admin/admin-events/admin-events.component';
import { AdminCreateEventComponent } from './components/admin/admin-create-event/admin-create-event.component';
import { AdminEditEventComponent } from './components/admin/admin-edit-event/admin-edit-event.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { DocumentationPostsComponent } from './components/documentation-posts/documentation-posts.component';
import { DocumentationPostComponent } from './components/documentation-post/documentation-post.component';
import { AdminDocsComponent } from './components/admin/admin-docs/admin-docs.component';
import { AdminDocsPostsComponent } from './components/admin/admin-docs-posts/admin-docs-posts.component';
import { AdminDocsCreateComponent } from './components/admin/admin-docs-create/admin-docs-create.component';
import { AdminDocsPostCreateComponent } from './components/admin/admin-docs-post-create/admin-docs-post-create.component';
import { AdminDocsPostEditComponent } from './components/admin/admin-docs-post-edit/admin-docs-post-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { YourAccNavComponent } from './components/your-acc/your-acc-nav/your-acc-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MainComponent,
    AboutUsComponent,
    NewsComponent,
    JoinComponent,
    PageNotFoundComponent,
    AuthComponent,
    YourAccComponent,
    DocumentationComponent,
    RegisterComponent,
    AdminUsersRequestsComponent,
    AdminPostComponent,
    AdminPostsComponent,
    AdminPostNewComponent,
    NewsPostComponent,
    EditMyAccComponent,
    YourAccScoutMinimumComponent,
    AdminUsersComponent,
    AdminUsersUserComponent,
    AdminUsersUserScoutMinimumComponent,
    EventsComponent,
    NowEventsComponent,
    AdminEventsComponent,
    AdminCreateEventComponent,
    AdminEditEventComponent,
    AdminPanelComponent,
    DocumentationPostsComponent,
    DocumentationPostComponent,
    AdminDocsComponent,
    AdminDocsPostsComponent,
    AdminDocsCreateComponent,
    AdminDocsPostCreateComponent,
    AdminDocsPostEditComponent,
    FooterComponent,
    YourAccNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
