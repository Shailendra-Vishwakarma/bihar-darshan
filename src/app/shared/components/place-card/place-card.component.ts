import { Component, Input } from '@angular/core';
import { TouristPlace } from '../../../models/tourist-place.model';

@Component({
  selector: 'app-place-card',
  standalone: false,
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss'
})
export class PlaceCardComponent {
  @Input() place!: TouristPlace;

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
