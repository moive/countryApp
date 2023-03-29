import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  search: string = '';
  thereIsError: boolean = false;

  constructor(private countryService: CountryService) {}

  onSubmit(): void {
    console.log(this.search);
    this.thereIsError = false;
    this.countryService.searchCountry(this.search).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.thereIsError = true;
      },
    });
    // this.search = '';
  }
}
