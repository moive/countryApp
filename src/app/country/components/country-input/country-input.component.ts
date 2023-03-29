import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  search: string = '';

  onSubmit = () => {
    this.onEnter.emit(this.search);
  };
}
