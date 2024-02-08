import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { finalize, tap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BikeService } from '@core/services/bike.service';
import { BikeDetailImageComponent } from './components/bike-detail-image/bike-detail-image.component';
import { BikeDetailRowComponent } from './components/bike-detail-row/bike-detail-row.component';
import { BikeDetailStatusComponent } from './components/bike-detail-status/bike-detail-status.component';

@Component({
  selector: 'app-bike-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MatProgressSpinnerModule,
    DatePipe,
    BikeDetailImageComponent,
    BikeDetailRowComponent,
    BikeDetailStatusComponent,
  ],
  templateUrl: './bike-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailComponent {
  private route = inject(ActivatedRoute);
  private bikeService = inject(BikeService);
  private get paramId() {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
  isLoading = signal(true);
  bikeDetails$ = this.bikeService
    .getById(this.paramId)
    .pipe(finalize(() => this.isLoading.set(false)));
}
