import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommentsPostComponent } from './pages/comments-post/comments-post.component';

import { CommentsService } from './services/comments.service';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PageNotFoundComponent,
    CommentsPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CommentsService, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
