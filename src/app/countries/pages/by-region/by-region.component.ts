import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { tap } from 'rxjs';
import { Region } from '../../interfaces/region.types';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent implements OnInit {
  regions: Region[] = ['americas', 'asia', 'europe', 'africa', 'oceania'];
  activeRegion?: Region;
  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.activeRegion = this.countryService.cacheStore.byRegion.term;
  }

  getClassCSS(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: Region) {
    this.isLoading = true;
    if (region == this.activeRegion) return;

    this.activeRegion = region;
    this.countries = [];

    this.countryService
      .searchRegion(region)
      .pipe(tap(console.log))
      .subscribe((res) => {
        this.countries = res;
        this.isLoading = false;
      });
  }
}
