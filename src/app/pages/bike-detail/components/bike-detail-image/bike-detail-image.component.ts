import { NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-detail-image',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './bike-detail-image.component.html',
  styleUrl: './bike-detail-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailImageComponent {
  @Input() imgSrc: string | null = null;
}
