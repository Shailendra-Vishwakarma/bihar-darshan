import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TouristPlace } from '../../models/tourist-place.model';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-places',
  standalone: false,
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss'
})
export class PlacesComponent implements OnInit {
  places: TouristPlace[] = [];
  loading = false;
  searchKeyword = '';
  selectedCategory = 'All';

  constructor(private placeService: PlaceService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) this.selectedCategory = params['category'];
      if (params['q']) this.searchKeyword = params['q'];
      this.loadPlaces();
    });
  }

  onSearch(keyword: string) {
    this.searchKeyword = keyword;
    this.loadPlaces();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.loadPlaces();
  }

  private loadPlaces() {
    this.loading = true;
    this.placeService.getAllPlaces(this.selectedCategory, this.searchKeyword).subscribe({
      next: places => { this.places = places; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
