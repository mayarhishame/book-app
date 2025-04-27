import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
];
