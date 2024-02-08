import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BikeSearchItemModel } from '@core/models/bike-search-item.model';
import { DetailRowComponent } from '@shared/components/detail-row/detail-row.component';

@Component({
  selector: 'app-bike-search-results-item',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterModule,
    MatButtonModule,
    NgOptimizedImage,
    DetailRowComponent,
  ],
  templateUrl: './bike-search-results-item.component.html',
  styleUrl: './bike-search-results-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeSearchResultsItemComponent {
  @Input() bike!: BikeSearchItemModel;
}
