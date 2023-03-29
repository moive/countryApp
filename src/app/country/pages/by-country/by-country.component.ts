import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  search: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  onSubmit(): void {
    this.thereIsError = false;

    this.countryService.searchCountry(this.search).subscribe({
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
}
