import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BikeSearchFormComponent } from './bike-search-form.component';

describe('BikeSearchFormComponent', () => {
  let component: BikeSearchFormComponent;
  let fixture: ComponentFixture<BikeSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeSearchFormComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BikeSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
