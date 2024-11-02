import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs';
import {Post, Comment} from './post-detail/post.model';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private API_URL = 'https://jsonplaceholder.typicode.com/posts';
  private API_COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  //Obtener posts paginados
  getPosts(page: number, limit: number): Observable<Post[]>{
    return this.http
    .get<Post[]>(`${this.API_URL}?_page=${page}&_limit=${limit}`)
    .pipe(catchError(this.handleError));
  }

  //Obtener un post por ID
  getPostsById(Id: number): Observable<Post>{
    return this.http
    .get<Post>(`${this.API_URL}/${Id}`)
    .pipe(catchError(this.handleError))
  }

  //Obtener comentarios por ID de post
  getCommentByPostId(postId: number): Observable<Comment[]>{
    return this.http
    .get<Comment[]>(`${this.API_COMMENT_URL}?postId=${postId}`)
    .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    return throwError(() => new Error('Error al obtener los datos.'));
  }
}
