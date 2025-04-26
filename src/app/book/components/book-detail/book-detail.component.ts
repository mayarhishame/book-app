import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  currentId: number = 0;
  books: Book | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}
  ngOnInit(): void {
    this.currentId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.books = this.bookService.getBookById(this.currentId);
  }
  goBack() {
    this.router.navigate(['']);
  }
}
