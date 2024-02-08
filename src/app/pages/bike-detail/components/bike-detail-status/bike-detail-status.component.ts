import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-detail-status',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bike-detail-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailStatusComponent {
  @Input() stolen!: boolean;
  @Input() status!: string;
}
