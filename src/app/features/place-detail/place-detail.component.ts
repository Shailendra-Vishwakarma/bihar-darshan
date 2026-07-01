import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TouristPlace } from '../../models/tourist-place.model';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-place-detail',
  standalone: false,
  templateUrl: './place-detail.component.html',
  styleUrl: './place-detail.component.scss'
})
export class PlaceDetailComponent implements OnInit {
  place: TouristPlace | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeService.getPlaceById(id).subscribe({
      next: place => { this.place = place; },
      error: () => { this.router.navigate(['/places']); }
    });
  }

  categoryBadgeClass(): string {
    const map: Record<string, string> = {
      Historical: 'badge-historical',
      Religious:  'badge-religious',
      Nature:     'badge-nature',
      Wildlife:   'badge-wildlife',
      Adventure:  'badge-adventure'
    };
    return this.place ? (map[this.place.category] ?? '') : '';
  }
}
