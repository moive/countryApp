import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Enter';
  @Input() initialValue: string = '';

  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;

  search: string = '';

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebunce.emit(value);
      });
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onPressKeyDown(value: string) {
    this.debouncer.next(value);
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
}
