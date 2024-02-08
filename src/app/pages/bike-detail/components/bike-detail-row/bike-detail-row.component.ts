import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-detail-row',
  standalone: true,
  imports: [],
  template: `
    <div>
      <span class="font-bold">{{ label }}:</span> {{ value }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailRowComponent {
  @Input() label: string | null = '';
  @Input() value: string | null = '';
}
