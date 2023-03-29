import { Component } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent {
  search: string = '';

  onSubmit = () => {
    console.log(this.search);
  };
}
