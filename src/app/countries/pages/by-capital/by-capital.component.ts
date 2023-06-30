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
  isLoading: boolean = false;

  constructor(private countryService: CountryService) {}

  searchByCapital(search: string): void {
    this.isLoading = true;
    this.thereIsError = false;
    this.countryService.searchCapital(search).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
      if (data.length == 0) this.thereIsError = true;
    });
    this.search = search;
  }
}
