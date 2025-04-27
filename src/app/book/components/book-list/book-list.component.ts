import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  showDetails(book: Book) {
    this.selectedBook = book;
  }

  clearSelection() {
    this.selectedBook = null;
  }
}
