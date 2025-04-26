import { Routes } from '@angular/router';
import { BookDetailComponent } from './book/components/book-detail/book-detail.component';
import { BookListComponent } from './book/components/book-list/book-list.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'Details/:id', component: BookDetailComponent },
];
