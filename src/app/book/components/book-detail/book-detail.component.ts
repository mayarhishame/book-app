import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  @Input() book: Book | null = null;
  @Output() backClicked = new EventEmitter<void>();

  goBack() {
    this.backClicked.emit();
  }
}
