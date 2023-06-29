import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Enter';

  debouncer: Subject<string> = new Subject();

  search: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebunce.emit(value);
    });
  }

  onSubmit = () => {
    this.onEnter.emit(this.search);
  };

  onPressKeyDown() {
    this.debouncer.next(this.search);
  }
}
