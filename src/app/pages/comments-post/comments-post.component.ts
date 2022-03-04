import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { IComments } from 'src/models/IComments';
import { ReactiveFormsModule } from '@angular/forms';

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
  @Output() setLastComment: EventEmitter<string> = new EventEmitter();
  
  public formComentario!: FormGroup;

  constructor(private route: ActivatedRoute, private commentsService: CommentsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.commentsService.getComents().subscribe((comments) => {
      this.comments = comments;
    });

    this.formComentario = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      body: ['', [Validators.required, Validators.maxLength(500)]]
    })
  }
  
  emitir() {
    this.setLastComment.emit(this.fecha);
  }

  guardarNuevoComentario(){
    this.comments.push({...this.formComentario.value, postId: this.idPost});
    this.formComentario.reset();
  }

  eliminarComentario(indice: number){
    this.comments.splice(indice, 1);
  }
}
