import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BikeSearchComponent } from './bike-search.component';

describe('BikeSearchComponent', () => {
  let component: BikeSearchComponent;
  let fixture: ComponentFixture<BikeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BikeSearchComponent,
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BikeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
