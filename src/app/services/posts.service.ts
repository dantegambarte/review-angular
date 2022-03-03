import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from 'src/models/IPosts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private api = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.api);
  }
  getPost(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(`${this.api}/${id}`);
  }
}
