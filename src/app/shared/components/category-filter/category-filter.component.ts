import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  standalone: false,
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss'
})
export class CategoryFilterComponent {
  @Output() categoryChange = new EventEmitter<string>();

  categories = ['All', 'Historical', 'Religious', 'Nature', 'Wildlife', 'Adventure'];
  selected = 'All';

  iconMap: Record<string, string> = {
    All:       'bi-grid',
    Historical:'bi-building',
    Religious: 'bi-flower1',
    Nature:    'bi-tree',
    Wildlife:  'bi-camera',
    Adventure: 'bi-bicycle'
  };

  select(cat: string) {
    this.selected = cat;
    this.categoryChange.emit(cat);
  }
}
