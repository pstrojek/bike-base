import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-row',
  standalone: true,
  imports: [],
  template: `
    <div>
      <span class="font-bold">{{ label }}:</span> {{ value }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailRowComponent {
  @Input() label: string | null = '';
  @Input() value: string | null = '';
}
