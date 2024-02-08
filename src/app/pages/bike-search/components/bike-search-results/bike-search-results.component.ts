import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BikeSearchResultsItemComponent } from './components/bike-search-results-item/bike-search-results-item.component';
import { BikeSearchItemModel } from '@core/models/bike-search-item.model';

@Component({
  selector: 'app-bike-search-results',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatProgressSpinnerModule,
    BikeSearchResultsItemComponent,
  ],
  templateUrl: './bike-search-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeSearchResultsComponent {
  @Input() bikes: BikeSearchItemModel[] = [];
  @Input() isLoading = false;

  trackByBikeSearchItem(index: number, item: BikeSearchItemModel): number {
    return item.id;
  }
}
