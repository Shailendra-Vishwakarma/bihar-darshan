import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristPlace } from '../models/tourist-place.model';

@Injectable({ providedIn: 'root' })
export class PlaceService {

  private readonly API = 'http://localhost:8090/api/places';

  constructor(private http: HttpClient) {}

  getAllPlaces(category?: string, search?: string): Observable<TouristPlace[]> {
    let params = new HttpParams();
    if (category && category !== 'All') params = params.set('category', category);
    if (search && search.trim()) params = params.set('search', search.trim());
    return this.http.get<TouristPlace[]>(this.API, { params });
  }

  getPlaceById(id: number): Observable<TouristPlace> {
    return this.http.get<TouristPlace>(`${this.API}/${id}`);
  }

  getFeatured(): Observable<TouristPlace[]> {
    return this.getAllPlaces();
  }
}
