import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  search: string = '';
  onSubmit(): void {
    console.log(this.search);
  }
}
