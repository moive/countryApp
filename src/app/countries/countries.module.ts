import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CountriesRoutingModule } from './countries-routing.module';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const components = [
  ByCapitalComponent,
  ByCountryComponent,
  ByRegionComponent,
  CountryPageComponent,
];

@NgModule({
  declarations: [components, CountryTableComponent, CountryInputComponent],
  imports: [CommonModule, CountriesRoutingModule, FormsModule, RouterModule],
  exports: [components],
})
export class CountriesModule {}
