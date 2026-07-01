import { Component, Input, OnInit } from '@angular/core';
import { TouristPlace } from '../../../models/tourist-place.model';
import { AuthService } from '../../../services/auth.service';
import { FavoriteService } from '../../../services/favorite.service';

@Component({
  selector: 'app-place-card',
  standalone: false,
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss'
})
export class PlaceCardComponent implements OnInit {
  @Input() place!: TouristPlace;
  isFavorite = false;
  favLoading = false;

  constructor(private authService: AuthService, private favoriteService: FavoriteService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.favoriteService.check(this.place.id).subscribe({
        next: res => { this.isFavorite = res.favorite; },
        error: () => {}
      });
    }
  }

  get loggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  toggleFavorite(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.loggedIn || this.favLoading) return;
    this.favLoading = true;
    const action = this.isFavorite
      ? this.favoriteService.remove(this.place.id)
      : this.favoriteService.add(this.place.id);
    action.subscribe({
      next: () => { this.isFavorite = !this.isFavorite; this.favLoading = false; },
      error: () => { this.favLoading = false; }
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
    return map[this.place.category] ?? 'badge-secondary';
  }
}
