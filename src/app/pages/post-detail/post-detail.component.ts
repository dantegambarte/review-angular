import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPosts } from 'src/models/IPosts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  id!: number;
  post: IPosts = {  userId: 0, id: 0, title: "", body: "",};
  lastComment!: string;
  str: string = "";

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id')!);
    });

    this.postsService.getPost(this.id).subscribe((post) => {
      this.post = post;
    });
  }

  getLastComment(comment: string){
    this.lastComment = comment;
    this.str = "Last comment: "
  }
}
