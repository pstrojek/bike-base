import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { BikeSearchResultsComponent } from './components/bike-search-results/bike-search-results.component';
import { BikeSearchFormComponent } from './components/bike-search-form/bike-search-form.component';
import { BikeService } from '@core/services/bike.service';
import { BikeSearchItemModel } from '@core/models/bike-search-item.model';
import { first } from 'rxjs';

@Component({
  selector: 'app-bike-search',
  standalone: true,
  imports: [BikeSearchFormComponent, BikeSearchResultsComponent],
  templateUrl: './bike-search.component.html',
  styleUrl: './bike-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeSearchComponent {
  private bikeService = inject(BikeService);
  bikes: WritableSignal<BikeSearchItemModel[]> = signal([]);
  isSearchLoading = signal(false);

  search(city: string) {
    if (!city) {
      return;
    }

    this.isSearchLoading.set(true);
    this.bikeService
      .search(city)
      .pipe(first())
      .subscribe((result) => {
        this.bikes.set(result);
        this.isSearchLoading.set(false);
      });
  }
}
