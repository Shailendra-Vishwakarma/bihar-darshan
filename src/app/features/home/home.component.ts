import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TouristPlace } from '../../models/tourist-place.model';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featured: TouristPlace[] = [];

  categories = [
    { name: 'Historical', icon: 'bi-building', color: 'warning' },
    { name: 'Religious', icon: 'bi-flower1', color: 'danger' },
    { name: 'Nature', icon: 'bi-tree', color: 'success' },
    { name: 'Wildlife', icon: 'bi-camera', color: 'info' },
    { name: 'Adventure', icon: 'bi-bicycle', color: 'primary' }
  ];

  constructor(private placeService: PlaceService, private router: Router) {}

  ngOnInit() {
    this.placeService.getFeatured().subscribe({
      next: places => { this.featured = places.slice(0, 6); },
      error: () => {}
    });
  }

  goToCategory(cat: string) {
    this.router.navigate(['/places'], { queryParams: { category: cat } });
  }

  searchFromHero(keyword: string) {
    if (keyword.trim()) {
      this.router.navigate(['/places'], { queryParams: { q: keyword } });
    }
  }
}
