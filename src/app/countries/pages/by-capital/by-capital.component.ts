import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  search: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByCapital(search: string): void {
    this.thereIsError = false;
    this.countryService.searchCapital(search).subscribe({
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
