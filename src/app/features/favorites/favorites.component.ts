import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouristPlace } from '../../models/tourist-place.model';

@Component({
  selector: 'app-favorites',
  standalone: false,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  places: TouristPlace[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    this.http.get<TouristPlace[]>('http://localhost:8090/api/favorites').subscribe({
      next: places => { this.places = places; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  remove(placeId: number) {
    this.http.delete(`http://localhost:8090/api/favorites/${placeId}`).subscribe(() => {
      this.places = this.places.filter(p => p.id !== placeId);
    });
  }
}
