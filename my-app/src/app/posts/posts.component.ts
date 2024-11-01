import { Component } from '@angular/core';
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {userId: 1, id: 1, title: 'hola mundo', body: 'H'},
  
]

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostDetailComponent, PaginationComponent, MatTableModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'detail'];
  dataSource = ELEMENT_DATA;
}
