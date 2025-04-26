import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: Book[] = [];
  constructor(private bookService: BookService, private router: Router) {
    this.books = this.bookService.getBooks();
  }
  navigateToDetails(id: number) {
    this.router.navigate(['/Details', id]);
  }
}
