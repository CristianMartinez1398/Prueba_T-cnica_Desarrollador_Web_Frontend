import { Component, OnInit } from '@angular/core';
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";
import {MatTableModule} from '@angular/material/table';
import { PostsService } from '../posts.service';


export interface PeriodicElement {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostDetailComponent, PaginationComponent, MatTableModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'detail'];
  dataSource: PeriodicElement[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  totalPosts = 100;

  constructor(private postsService: PostsService){}

  ngOnInit(): void{
    this.loadPosts();
  }

  loadPosts(): void{
    this.postsService.getPosts(this.currentPage, this.itemsPerPage).subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  OnPageChange(newPage: number){
    this.currentPage = newPage;
    this.loadPosts();
  }


}
