import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bike-search',
    loadComponent: () =>
      import('./pages/bike-search/bike-search.component').then(
        (mod) => mod.BikeSearchComponent
      ),
  },
  {
    path: 'bike-detail/:id',
    loadComponent: () =>
      import('./pages/bike-detail/bike-detail.component').then(
        (mod) => mod.BikeDetailComponent
      ),
  },
  { path: '', redirectTo: '/bike-search', pathMatch: 'full' },
];
