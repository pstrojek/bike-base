import { Routes } from '@angular/router';
import { BikeSearchComponent } from './pages/bike-search/bike-search.component';
import { BikeDetailComponent } from './pages/bike-detail/bike-detail.component';

export const routes: Routes = [
  { path: 'bike-search', component: BikeSearchComponent },
  { path: 'bike-detail', component: BikeDetailComponent },
  { path: '', redirectTo: '/bike-search', pathMatch: 'full' },
];
