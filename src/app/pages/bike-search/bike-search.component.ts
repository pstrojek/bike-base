import { Component, inject } from '@angular/core';
import { BikeSearchItemModel } from '../../core/models/bike-search-item.model';
import { BikeService } from '../../core/services/bike.service';
import { BikeSearchResultsComponent } from './components/bike-search-results/bike-search-results.component';
import { BikeSearchFormComponent } from './components/bike-search-form/bike-search-form.component';

@Component({
  selector: 'app-bike-search',
  standalone: true,
  imports: [BikeSearchFormComponent, BikeSearchResultsComponent],
  templateUrl: './bike-search.component.html',
  styleUrl: './bike-search.component.scss',
})
export class BikeSearchComponent {
  private bikeService = inject(BikeService);
  bikes: BikeSearchItemModel[] = [];

  search(city: string) {
    this.bikeService
      .search(city)
      .subscribe((result) => (this.bikes = result.bikes));
  }
}
