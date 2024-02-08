import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSearchResultsItemComponent } from './bike-search-results-item.component';

describe('BikeSearchResultsItemComponent', () => {
  let component: BikeSearchResultsItemComponent;
  let fixture: ComponentFixture<BikeSearchResultsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeSearchResultsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BikeSearchResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
