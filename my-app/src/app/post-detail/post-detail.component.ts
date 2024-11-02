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
  styleUrls: ['./post-detail.component.css'] // corregido a "styleUrls" en plural
})
export class PostDetailComponent implements OnInit { // implementado OnInit
  post: Post | null = null;
  comment: Comment[] = [];
  postId!: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      console.log('Route params:', params); // Para ver todos los parámetros
      console.log('Retrieved id:', id); // Para ver el id específico
      if (id) {
        this.postId = +id; // Convierte a número
        console.log('postId after assignment:', this.postId);
        this.loadPostDetails();
      } else {
        console.error('Error: postId is null or undefined');
      }
    });
  }

  loadPostDetails(): void {
    if (this.postId > 0) { // Verificación adicional para evitar que postId sea 0
      this.postsService.getPostById(this.postId).subscribe({
        next: (datas) => {
          this.post = datas;
          this.loadComments();
        },
        error: (error) => {
          console.error('Error loading post details:', error);
        }
      });
    } else {
      console.error('Error: postId must be greater than 0');
    }
  }

  loadComments(): void {
    this.postsService.getCommentByPostId(this.postId).subscribe({
      next: (data) => {
        this.comment = data;
      },
      error: (error) => {
        console.error('Error loading comments:', error);
      }
    });
  }
}
