import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service/posts.service';
import { Post, Comment } from './post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  comment: Comment[] = [];
  postId!: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id && Number(id) > 0) {
          this.postId = parseInt(id, 10);
          this.loadPostDetails();
        } else {
          console.error('Error: postId inválido o ausente');
        }
      },
      error: (error) => console.error('Error en los parámetros de la ruta:', error)
    });
  }

  loadPostDetails(): void {
    if (this.postId > 0) {
      this.postsService.getPostById(this.postId).subscribe({
        next: (data) => {
          this.post = data;
          this.loadComments();
        },
        error: (error) => {
          console.error('Error cargando los detalles del post:', error);
        }
      });
    }
  }
  
  loadComments(): void {
    this.postsService.getCommentByPostId(this.postId).subscribe({
      next: (data) => {
        this.comment = data;
      },
      error: (error) => {
        console.error('Error cargando los comentarios:', error);
      }
    });
  }
  
}