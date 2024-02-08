import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BikeSearchItemModel,
  BikeSearchPayload,
} from '../models/bike-search-item.model';
import { Observable, map } from 'rxjs';
import { BikeDetail, BikeDetailPayload } from '../models/bike-detail.model';

const BASE_URL = 'https://bikeindex.org:443/api/v3';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  private http = inject(HttpClient);

  search(city: string): Observable<BikeSearchItemModel[]> {
    const params = `?page=1&per_page=25&location=${city}&distance=10&stolenness=proximity`;

    return this.http
      .get<BikeSearchPayload>(`${BASE_URL}/search${params}`)
      .pipe(map((result) => result.bikes));
  }

  getById(id: number): Observable<BikeDetail> {
    return this.http
      .get<BikeDetailPayload>(`${BASE_URL}/bikes/${id}`)
      .pipe(map((result) => result.bike));
  }
}
