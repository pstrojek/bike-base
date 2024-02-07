import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from '../../core/services/bike.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-bike-detail',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './bike-detail.component.html',
  styleUrl: './bike-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailComponent {
  private route = inject(ActivatedRoute);
  private bikeService = inject(BikeService);
  private get paramId() {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
  bikeDetails$ = this.bikeService
    .getById(this.paramId)
    .pipe(map((it) => it.bike));
}
