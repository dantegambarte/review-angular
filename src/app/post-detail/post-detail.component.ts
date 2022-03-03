import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  id!: Number;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get("id")!);
    })
  }

}
