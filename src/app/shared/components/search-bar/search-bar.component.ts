import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnDestroy {
  @Output() search = new EventEmitter<string>();

  keyword = '';
  private input$ = new Subject<string>();

  constructor() {
    this.input$.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(val => this.search.emit(val));
  }

  onInput(value: string) {
    this.input$.next(value);
  }

  clear() {
    this.keyword = '';
    this.search.emit('');
  }

  ngOnDestroy() {
    this.input$.complete();
  }
}
