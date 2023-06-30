import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.getCountryByAlpha(id)))
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        console.log({ country });
        return (this.country = country);
      });
  }
}
