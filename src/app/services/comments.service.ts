import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComments } from 'src/models/IComments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private api = 'https://jsonplaceholder.typicode.com/comments/';
  constructor(private http: HttpClient) {}

  getComents(): Observable<IComments[]> {
    return this.http.get<IComments[]>(this.api);
  }
}
