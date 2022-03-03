import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from 'src/models/IPosts';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts!: IPosts[];
  id!: number;
  public page!: number;
  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe( posts => {
      this.posts = posts;
    })
  }
}
