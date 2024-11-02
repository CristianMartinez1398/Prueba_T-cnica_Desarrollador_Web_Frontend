import { Routes } from '@angular/router';
import path from 'path';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PaginationComponent } from './shared/pagination/pagination.component'

export const routes: Routes = [
    { path: '', component: PostsComponent }, // Componente principal
    { path: 'post-detail/:id', component: PostDetailComponent }, // Detalle del post
    
];
