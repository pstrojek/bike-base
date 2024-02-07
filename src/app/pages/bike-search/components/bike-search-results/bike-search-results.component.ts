import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BikeSearchItemModel } from '../../../../core/models/bike-search-item.model';

@Component({
  selector: 'app-bike-search-results',
  standalone: true,
  imports: [NgFor, RouterModule, MatButtonModule],
  templateUrl: './bike-search-results.component.html',
  styleUrl: './bike-search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeSearchResultsComponent {
  @Input() bikes: BikeSearchItemModel[] = [];

  trackByBikeSearchItem(index: number, item: BikeSearchItemModel): number {
    return item.id;
  }
}
