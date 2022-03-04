import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { IComments } from 'src/models/IComments';

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css'],
})
export class CommentsPostComponent implements OnInit {
  comments!: IComments[];
  @Input() idPost!: number;
  constructor(private route: ActivatedRoute, private commentsService: CommentsService) {}

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.idPost = parseInt(params.get('id')!);
    // });
    this.commentsService.getComents().subscribe((comments) => {
      console.log(comments);
      this.comments = comments;
    });
  }
}
