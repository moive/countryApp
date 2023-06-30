import { Component, OnInit } from '@angular/core';
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
export class ByCountryComponent implements OnInit {
  search: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;
  isLoading: boolean = false;
  initialValue: string = '';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  onSubmit(search: string): void {
    this.showSuggestions = false;
    this.thereIsError = false;
    this.countryService.searchCountry(search).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
      if (data.length == 0) this.thereIsError = true;
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
