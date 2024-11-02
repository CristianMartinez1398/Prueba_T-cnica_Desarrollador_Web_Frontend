import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import {Post, Comment} from './post.model';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent{
  post: Post | null = null;
  comment: Comment[] = [];
  postId: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ){
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void{
    this.loadPostDetails();
  }

  loadPostDetails(): void{
    this.postsService.getPostsById(this.postId).subscribe({
      next: (data) => {
        this.post = data;
        this.loadComments();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  loadComments(): void{
    this. postsService.getCommentByPostId(this.postId).subscribe({
      next: (data) => {
        this.comment = data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
