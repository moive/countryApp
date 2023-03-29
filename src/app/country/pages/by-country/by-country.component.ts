import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  search: string = '';

  constructor(private countryService: CountryService) {}

  onSubmit(): void {
    console.log(this.search);
    this.countryService.searchCountry(this.search).subscribe(console.log);
    this.search = '';
  }
}
