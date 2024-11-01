import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',


})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPosts = 0;
  @Input() itemsPerPage = 5;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number{
    return Math.ceil(this.totalPosts / this.itemsPerPage);
  }

  nextPage(){
    if (this.currentPage < this.totalPages) {
      this.currentPage++
      this.pageChange.emit(this.currentPage);
    }
    
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
