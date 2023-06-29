import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Enter';

  debouncer: Subject<string> = new Subject();

  search: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebunce.emit(value);
    });
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onPressKeyDown() {
    this.debouncer.next(this.search);
  }
}
