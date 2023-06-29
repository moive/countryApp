import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      .pointer {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  search: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  onSubmit(search: string): void {
    this.showSuggestions = false;
    this.thereIsError = false;
    this.countryService.searchCountry(search).subscribe({
      next: (data) => {
        console.log(data);
        this.countries = data;
      },
      error: (err) => {
        console.log(err);
        this.thereIsError = true;
        this.countries = [];
      },
    });
    // this.search = '';
  }

  suggestions(search: string) {
    this.thereIsError = false;
    this.search = search;
    if (search === '') {
      this.showSuggestions = false;
    } else {
      this.showSuggestions = true;
    }
    this.countryService.searchCountry(search).subscribe({
      next: (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      error: (err) => (this.suggestedCountries = []),
    });
  }

  searchSuggested(search: string) {
    this.onSubmit(search);
  }
}
