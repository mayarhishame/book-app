import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookListComponent, BookDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [BookListComponent],
})
export class BookModule {}
