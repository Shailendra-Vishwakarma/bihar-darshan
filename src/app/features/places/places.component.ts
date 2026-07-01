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
  allPlaces: TouristPlace[] = [];
  filteredPlaces: TouristPlace[] = [];
  searchKeyword = '';
  selectedCategory = 'All';

  constructor(private placeService: PlaceService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.allPlaces = this.placeService.getAllPlaces();
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
      }
      if (params['q']) {
        this.searchKeyword = params['q'];
      }
      this.applyFilters();
    });
  }

  onSearch(keyword: string) {
    this.searchKeyword = keyword;
    this.applyFilters();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters() {
    let result = this.allPlaces;
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      result = result.filter(p => p.category === this.selectedCategory);
    }
    if (this.searchKeyword.trim()) {
      const kw = this.searchKeyword.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(kw) ||
        p.district.toLowerCase().includes(kw) ||
        p.category.toLowerCase().includes(kw) ||
        p.description.toLowerCase().includes(kw)
      );
    }
    this.filteredPlaces = result;
  }
}
