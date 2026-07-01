import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteService {

  private readonly API = 'http://localhost:8090/api/favorites';

  constructor(private http: HttpClient) {}

  add(placeId: number): Observable<unknown> {
    return this.http.post(`${this.API}/${placeId}`, {});
  }

  remove(placeId: number): Observable<unknown> {
    return this.http.delete(`${this.API}/${placeId}`);
  }

  check(placeId: number): Observable<{ favorite: boolean }> {
    return this.http.get<{ favorite: boolean }>(`${this.API}/${placeId}/check`);
  }
}
