import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from "./posts/posts.component";
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PaginationComponent } from './shared/pagination/pagination.component'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsComponent, PostDetailComponent, PaginationComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
