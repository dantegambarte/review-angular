import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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
  date: Date = new Date();
  fecha: string = `${this.date.getFullYear()}, ${this.date.getMonth() + 1}, ${this.date.getDay() -1}`;
  @Output() setLastComment: EventEmitter<string> = new EventEmitter()
  constructor(private route: ActivatedRoute, private commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService.getComents().subscribe((comments) => {
      this.comments = comments;
    });
  }
  
  emitir() {
    this.setLastComment.emit(this.fecha);
  }
}
